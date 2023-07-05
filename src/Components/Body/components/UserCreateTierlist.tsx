import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { Character, DEFAULT_TIERNAMES, Tier, Tierlist, tierColors } from "../../../Classes/TierlistClass";
import { handleDownloadClick } from "../../../Helpers/handleDownloadClick";
import { useTierListStore } from "../../../Stores/tierListStore";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useUserStore } from "../../../Stores/userStore";
import { firestoreDB } from "../../../main";

const UserCreateTierlist = () => {
	const { selectedGame } = useUiNavigationStore();

	const {
		currentTierlist,
		setCurrentTierlist,
		tierlistCharacterBank,
		setTierlistCharacterBank,
		bugFixCharacterBank,
		setBugFixCharacterBank,
	} = useTierListStore();

	const tierlistRef = useRef<HTMLDivElement>(null);
	const [copiedTemplateCharacterBank, setcopiedTemplateCharacterBank] = useState<Character[]>([]);
	const { isLoggedIn, currentUserData } = useUserStore();
	const [tierlistName, setTierlistName] = useState("");

	const [domTierListNames, setDomTierListNames] = useState<string[]>(
		selectedGame!.tiers.map((tier) => tier.tierName) || []
	);
	const [domTierColors, setDomTierColors] = useState<string[]>(
		selectedGame!.tiers.map((tier) => tier.tierColor) || []
	);

	const [draggingPreventHoverPlus, setdraggingPreventHoverPlus] = useState(false);
	const [draggedCharacter, setdraggedCharacter] = useState<Character | null>(null);
	const [displayModal, setdisplayModal] = useState(false);
	const [resetModalDisplay, setResetModalDisplay] = useState(false);
	const [savedTierlist, setsavedTierlist] = useState(false);
	const [displayCogModal, setdisplayCogModal] = useState(false);
	const [clickedTiername, setClickedTiername] = useState("");
	const [counter, setcounter] = useState(0);
	const [counterAdd, setcounterAdd] = useState(0);

	const [clickedIndex, setClickedIndex] = useState(0);

	const prepareForUserCreatedTierlist = (tierlist: Tierlist | null): Tierlist | null => {
		if (!tierlist) {
			console.log("tierlist is null");
			return null;
		}
		//empty out the tiers
		const emptyTiers: Tier[] = tierlist.tiers.map((tier: Tier) => ({
			...tier,
			characters: [],
		}));

		return new Tierlist(
			tierlist.name,
			tierlist.game,
			tierlist.description,
			tierlist.logoImageURL,
			emptyTiers,
			tierlist.dateCreated
		);
	};

	const extractCharactersFromTierlist = (tierlist: Tierlist | null) => {
		const characterBank: Character[] = [];

		tierlist?.tiers.forEach((tier) => {
			tier.characters.forEach((character) => {
				characterBank.push(character);
			});
		});

		if (!characterBank || characterBank.length === 0) {
			setcopiedTemplateCharacterBank(bugFixCharacterBank);
			setTierlistCharacterBank(bugFixCharacterBank);
		} else {
			setcopiedTemplateCharacterBank(characterBank);
			setTierlistCharacterBank(characterBank);
		}
	};

	const handleCardBankDrag = (character: Character) => {
		setdraggingPreventHoverPlus(true);

		setdraggedCharacter(character);
	};

	const handleTierlistDrag = (character: Character) => {
		setdraggingPreventHoverPlus(true);

		setdraggedCharacter(character);
	};

	function removeCharFromBank(character: Character) {
		const updatedCharacterBank = tierlistCharacterBank.filter(
			(draggedChar) => draggedChar.name !== character.name
		);
		setTierlistCharacterBank(updatedCharacterBank);
	}

	//Handle the event when a card is dropped onto a tierlist.
	const handleCardBankDropOntoTierlist = (event: React.DragEvent<HTMLDivElement>, tierName?: string) => {
		event.preventDefault();
		event.stopPropagation();
		// Disable dropping the card onto text inputs

		// Get the index where the card should be inserted
		const insertIndex = event.currentTarget.getAttribute("data-index");
		// Get the character data from the data transfer
		// Remove the character from the current tierlist if it already exists

		if (event.currentTarget.className === "CharacterBank") {
			dropCardCharacterBank(draggedCharacter!);
			setTimeout(() => {}, 100);
			return;
		}
		if (draggedCharacter) {
			removeCharacterIfExists(draggedCharacter, currentTierlist);
		}

		if (insertIndex !== null) {
			// If an insert index is provided, insert the character at that index
			const index = parseInt(insertIndex);
			removeCharFromBank(draggedCharacter!);
			const updatedTierlist = currentTierlist;
			updatedTierlist!.tiers.forEach((tier) => {
				if (tier.tierName === tierName) {
					tier.characters.splice(index, 0, draggedCharacter!);
				}
			});
			setCurrentTierlist(updatedTierlist!);
			setTimeout(() => {}, 100);

			return;
		}

		// If no insert index is provided, add the character to the end of the tier

		removeCharFromBank(draggedCharacter!);
		const updatedTierlist = currentTierlist;
		updatedTierlist!.tiers.forEach((tier) => {
			if (tier.tierName === tierName) {
				tier.characters.push(draggedCharacter!);
			}
		});
		setCurrentTierlist(updatedTierlist!);
		setTimeout(() => {}, 100);
	};

	const handleDragOver = (event: React.DragEvent<HTMLImageElement>) => {
		event.preventDefault();
	};

	const handleResetClick = () => {
		const resetTierlist = selectedGame;
		if (!resetTierlist) {
			console.log("tierlist is null");
			return;
		}

		const setObjectTemplateCharacterBank = new Set(copiedTemplateCharacterBank);
		const prunedCharacterBank = Array.from(setObjectTemplateCharacterBank);

		setTierlistCharacterBank(prunedCharacterBank);
		setBugFixCharacterBank(prunedCharacterBank);
		setDomTierListNames(DEFAULT_TIERNAMES);
		setResetModalDisplay(false);
		setdisplayModal(false);
		setDomTierColors(tierColors);
		resetTierlist?.resetTierlist();
		setCurrentTierlist(resetTierlist!);
	};

	const displayResetModal = () => {
		setResetModalDisplay(true);
		setdisplayModal(true);
	};

	const handleSaveTierlistClick = async () => {
		if (tierlistName === "") {
			console.log("tierlist name is empty");
			setdisplayModal(true);
			return;
		}
		try {
			const tierlistObject = convertTierlistToNormalObject();
			const docRef = await saveTierlistToFirestore(tierlistObject);
			setTierlistName("");
			console.log("Document written with ID: ", docRef.id);
			handleResetClick();
			setsavedTierlist(true);
			return docRef.id;
		} catch (error) {
			console.log("Error saving tierlist:", error);
		}

		function convertTierlistToNormalObject() {
			return {
				name: currentTierlist!.name,
				game: currentTierlist!.game,
				description: currentTierlist!.description,
				logoImageURL: currentTierlist!.logoImageURL,
				uniqueID: uuid(),
				tiers: currentTierlist!.tiers.map((tier, index) => ({
					tierName: domTierListNames[index],
					tierColor: domTierColors[index],
					characters: tier.characters,
				})),
				dateCreated: new Date(),
			};
		}

		async function saveTierlistToFirestore(tierlistObject: {
			name: string;
			game: string;
			description: string;
			logoImageURL: string;
			uniqueID: string;
			tiers: { tierName: string; tierColor: string; characters: Character[] }[];
			dateCreated: Date;
		}) {
			return await addDoc(collection(firestoreDB, "tierlistData"), {
				userID: currentUserData?.uid,
				tierlist: tierlistObject,
				displayName: currentUserData?.displayName,
				email: currentUserData?.email,
			});
		}
	};

	const handleTierListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTierlistName(event.target.value);
	};

	const changeTierNameChange = (event: React.ChangeEvent<HTMLInputElement>, tierIndex: number) => {
		const updatedTierListNames = [...domTierListNames];
		updatedTierListNames[tierIndex] = event.target.value;

		setDomTierListNames(updatedTierListNames);

		console.log(`changed tier name to ${event.target.value} at index ${tierIndex}`);
	};

	function removeCharacterIfExists(characterData: Character, currentTierlist: Tierlist | null) {
		const updatedTierlist = (currentTierlist && { ...currentTierlist }) || null;

		if (updatedTierlist) {
			updatedTierlist.tiers.forEach((tier) => {
				tier.characters = tier.characters.filter(
					(character) => character.name !== characterData.name
				);
			});
		}
	}

	const dropCardCharacterBank = (characterData: Character) => {
		removeCharacterIfExists(characterData, currentTierlist);
		const currentCharacterBank = tierlistCharacterBank;

		const characterExists = currentCharacterBank.some(
			(character) => character.name === characterData.name
		);

		if (characterExists) {
			return;
		}

		currentCharacterBank.push(characterData);
		console.log(`Dropped character ${characterData.name} into the bank`);
	};

	const dragAddCardBank = () => {
		const charToAdd = draggedCharacter;
		const currentBank = tierlistCharacterBank;

		currentBank.push(charToAdd!);
		const uniqueBank = Array.from(new Set(currentBank));
		setTierlistCharacterBank(uniqueBank);
		removeCharacterIfExists(charToAdd!, currentTierlist!);
		console.log(`Dropped character ${charToAdd!.name} into the bank`);
	};

	const dragRemoveCardBank = () => {
		const uniqueBank = Array.from(new Set(tierlistCharacterBank));

		setTierlistCharacterBank(uniqueBank);
	};

	const closeModal = () => {
		setdisplayModal(false);
		setResetModalDisplay(false);
		setsavedTierlist(false);
		console.log("modal closed");
	};

	const isValidIndex = (index: number, tierlist: Tierlist): boolean => {
		return index >= 0 && index < tierlist.tiers.length;
	};

	const swapTiers = (indexA: number, indexB: number, tierlist: Tierlist): boolean => {
		console.table(tierlist);
		const correctColors = domTierColors;
		if (!isValidIndex(indexA, tierlist) || !isValidIndex(indexB, tierlist)) {
			console.error("Invalid indices provided for tier swap.");
			setDomTierColors(correctColors);
			return false;
		} else {
			[tierlist.tiers[indexA], tierlist.tiers[indexB]] = [
				tierlist.tiers[indexB],
				tierlist.tiers[indexA],
			];
			[tierlist.tiers[indexA].tierName, tierlist.tiers[indexB].tierName] = [
				tierlist.tiers[indexB].tierName,
				tierlist.tiers[indexA].tierName,
			];
			return true;
		}
	};

	const handleSwapTiersClick = (indexA: number, indexB: number) => {
		const updatedTierlist = currentTierlist;
		if (swapTiers(indexA, indexB, updatedTierlist!)) {
			setCurrentTierlist(updatedTierlist!);

			const updatedTierListNamesDOM = domTierListNames;
			[updatedTierListNamesDOM[indexA], updatedTierListNamesDOM[indexB]] = [
				updatedTierListNamesDOM[indexB],
				updatedTierListNamesDOM[indexA],
			];
			setDomTierListNames(updatedTierListNamesDOM);

			const updatedTierListColors = domTierColors;
			[updatedTierListColors[indexA], updatedTierListColors[indexB]] = [
				updatedTierListColors[indexB],
				updatedTierListColors[indexA],
			];
			setDomTierColors(updatedTierListColors);
		}
	};

	const handleCogWheelClick = (index: number, tiername: string) => {
		setdisplayCogModal(true);
		setClickedIndex(index);
		setClickedTiername(tiername);
	};

	const changeTierColor = (index: number, color: string) => {
		const updatedTierlist = currentTierlist;
		updatedTierlist!.tiers[index].tierColor = `"${color}"`;
		setCurrentTierlist(updatedTierlist!);
		const currentColors = domTierColors;
		currentColors[index] = color;
		setDomTierColors(currentColors);
	};

	const handleDeleteRowClick = () => {
		const updatedTierlist = currentTierlist ? ({ ...currentTierlist } as Tierlist) : null;

		if (updatedTierlist) {
			updatedTierlist.tiers.splice(clickedIndex, 1);
			setCurrentTierlist(updatedTierlist);
			const newColors = updatedTierlist.tiers.map((tier) => tier.tierColor);
			const newTierNames = updatedTierlist.tiers.map((tier) => tier.tierName);
			setDomTierColors(newColors);
			setDomTierListNames(newTierNames);
			setClickedTiername("");
			setdisplayCogModal(false);
		}
	};
	const handleClearRowClick = () => {
		const updatedTierlist = currentTierlist ? ({ ...currentTierlist } as Tierlist) : null;
		updatedTierlist!.tiers[clickedIndex].characters = [];
		setCurrentTierlist(updatedTierlist!);
		setClickedTiername("");
		setdisplayCogModal(false);
	};

	const handleAddRowAboveClick = () => {
		const updatedTierlist = currentTierlist ? ({ ...currentTierlist } as Tierlist) : null;

		const existingTierNames = updatedTierlist!.tiers.map((tier) => tier.tierName);
		const newTierName = `${clickedTiername}+`;

		if (existingTierNames.includes(newTierName)) {
			updatedTierlist!.tiers.splice(clickedIndex, 0, {
				tierName: `tier-${counterAdd}`,
				tierColor: "white",
				characters: [],
			});
		} else {
			updatedTierlist!.tiers.splice(clickedIndex, 0, {
				tierName: newTierName,
				tierColor: "white",
				characters: [],
			});
		}
		let newCounter = counterAdd;
		newCounter++;
		setcounterAdd(newCounter);
		const newColors = updatedTierlist!.tiers.map((tier) => tier.tierColor);
		const newTierNames = updatedTierlist!.tiers.map((tier) => tier.tierName);
		setDomTierColors(newColors);
		setDomTierListNames(newTierNames);
		setCurrentTierlist(updatedTierlist!);
		setdisplayCogModal(false);
	};
	const handleAddRowBelowClick = () => {
		const updatedTierlist = currentTierlist ? ({ ...currentTierlist } as Tierlist) : null;

		const existingTierNames = updatedTierlist!.tiers.map((tier) => tier.tierName);
		const newTierName = `${clickedTiername}-`;

		if (existingTierNames.includes(newTierName)) {
			updatedTierlist!.tiers.splice(clickedIndex + 1, 0, {
				tierName: `tier-${counter}`,
				tierColor: "white",
				characters: [],
			});
		} else {
			updatedTierlist!.tiers.splice(clickedIndex + 1, 0, {
				tierName: newTierName,
				tierColor: "white",
				characters: [],
			});
		}
		let newCounter = counter;
		newCounter++;
		setcounter(newCounter);
		const newColors = updatedTierlist!.tiers.map((tier) => tier.tierColor);
		const newTierNames = updatedTierlist!.tiers.map((tier) => tier.tierName);
		setDomTierColors(newColors);
		setDomTierListNames(newTierNames);
		setCurrentTierlist(updatedTierlist!);
		setdisplayCogModal(false);
	};

	useEffect(() => {
		if (currentTierlist) {
			currentTierlist.name = tierlistName;
		}
	}, [tierlistName]);

	useEffect(() => {
		extractCharactersFromTierlist(selectedGame);
		const newEmptyTierList = prepareForUserCreatedTierlist(selectedGame);
		setCurrentTierlist(newEmptyTierList!);
		const colorArray = newEmptyTierList?.tiers.map((tier) => tier.tierColor) || [];
		setDomTierColors(colorArray);
	}, []);

	useEffect(() => {
		const modalOverlay = document.querySelector(".modal");

		if (!modalOverlay || !displayModal || !displayCogModal) {
			return;
		}
		modalOverlay.addEventListener("click", () => {
			closeModal();
		});
	}, [displayModal, savedTierlist]);

	useEffect(() => {
		if (!displayCogModal) {
			return;
		}
		const colorSpans = document.querySelectorAll(".colorspan");
		colorSpans.forEach((span) => {
			span.addEventListener("click", (event) => {
				const colorPicked = (event.target as HTMLDivElement)?.style.backgroundColor;
				changeTierColor(clickedIndex, colorPicked);
			});
		});
	}, [displayCogModal]);

	return (
		<div>
			{displayModal && (
				<div className="modal">
					<div className="modal-content">
						{resetModalDisplay ? (
							<>
								<h3>Confirm reset tierlist</h3>
								<button
									className="otherButton"
									onClick={handleResetClick}
								>
									Reset
								</button>
								<button
									className="closeButton"
									onClick={closeModal}
								>
									X
								</button>
							</>
						) : (
							<>
								<h3>Error</h3>
								<p>Tierlist name cannot be blank.</p>
								<button
									className="closeButton"
									onClick={closeModal}
								>
									X
								</button>
							</>
						)}
					</div>
				</div>
			)}

			{savedTierlist && (
				<div className="modal">
					<div className="modal-content">
						<h3>Tierlist Saved!</h3>
						<button
							className="closeButton"
							onClick={closeModal}
						>
							X
						</button>
					</div>
				</div>
			)}
			{displayCogModal && (
				<div className="modal">
					<div className="modalWrapper">
						<span
							className="modal-close"
							onClick={() => {
								setdisplayCogModal(false);
							}}
						>
							✕
						</span>
						<h5>Choose a Tier Background Color:</h5>
						<div className="color-select">
							<span
								style={{ background: "#FF7F7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#FFBF7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#FFDF7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#FFFF7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#BFFF7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#7FFF7F" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#7FFFFF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#7FBFFF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#7F7FFF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#FF7FFF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#BF7FBF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#3B3B3B" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#858585" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#CFCFCF" }}
								className="colorspan"
							></span>
							<span
								style={{ background: "#F7F7F7" }}
								className="colorspan"
							></span>
						</div>

						<div className="btn-settings-container">
							<button
								onClick={handleDeleteRowClick}
								className="cogButton"
							>
								Delete Row
							</button>
							<button
								className="cogButton"
								onClick={handleClearRowClick}
							>
								Clear Row{" "}
							</button>
							<button
								className="cogButton"
								onClick={handleAddRowAboveClick}
							>
								Add a Row Above
							</button>
							<button
								className="cogButton"
								onClick={handleAddRowBelowClick}
							>
								Add a Row Below
							</button>
						</div>
					</div>
				</div>
			)}

			<div onMouseUp={() => setdraggingPreventHoverPlus(false)}>
				<div className="TierlistContainer">
					{currentTierlist && (
						<>
							<div className="TopOfTierlistContainer">
								<div className="listLogoContainer">
									<img
										className="listLogo"
										src={currentTierlist.logoImageURL}
										alt="List Logo"
									/>
								</div>
								<div className="TierListTextInfo">
									<h1>{currentTierlist.game}</h1>
									<p>{currentTierlist.description}</p>
								</div>
							</div>
							<div className="tierlistButtonContainer">
								<input
									className={`tierlistNameInput${
										draggingPreventHoverPlus ? " dragging" : ""
									}`}
									placeholder="Tierlist Name"
									onChange={handleTierListNameChange}
									value={tierlistName}
								></input>
								<button
									className="tierListButton"
									onClick={handleSaveTierlistClick}
									disabled={!isLoggedIn}
								>
									Save Tierlist
								</button>
								<button
									className="tierListButton"
									onClick={handleDownloadClick}
								>
									Download Tierlist
								</button>
								<button
									className="tierListButton"
									onClick={displayResetModal}
								>
									Reset Tierlist
								</button>
							</div>
							<div
								className="TierList"
								ref={tierlistRef}
								onMouseLeave={() => {
									setdraggingPreventHoverPlus(false);
								}}
							>
								{currentTierlist.tiers.map((tier, index) => {
									return (
										<div
											className="rowContainer"
											key={tier.tierName + index}
										>
											<div
												className={`tier-name ${tier.tierName}-tier`}
												style={{ backgroundColor: domTierColors[index] }}
											>
												<input
													value={domTierListNames[index]}
													className={`tierNameInput${
														draggingPreventHoverPlus ? " dragging" : ""
													}`}
													style={{ backgroundColor: domTierColors[index] }}
													onChange={(event) => changeTierNameChange(event, index)}
													type="text"
													onDrop={(event) => {
														event.preventDefault();
													}}
													onDragOver={(event) => {
														event.preventDefault();
													}}
													required
												/>
											</div>
											<div
												key={tier.tierName + index}
												className={`tier-row ${tier.tierName}`}
												onDrop={(event: React.DragEvent<HTMLDivElement>) =>
													handleCardBankDropOntoTierlist(event, tier.tierName)
												}
												onDragOver={handleDragOver}
												onDragEnter={(event: React.DragEvent<HTMLDivElement>) =>
													handleCardBankDropOntoTierlist(event, tier.tierName)
												}
											>
												<div className="characterImages">
													{tier.characters.map((character, index) => (
														<div
															className="characterContainer"
															key={index}
														>
															<div
																className={`placeholder1 ${
																	draggingPreventHoverPlus ? "dragging" : ""
																}`}
																data-index={index}
																onDrop={(event) =>
																	handleCardBankDropOntoTierlist(
																		event,
																		tier.tierName
																	)
																}
																onDragEnter={(
																	event: React.DragEvent<HTMLDivElement>
																) =>
																	handleCardBankDropOntoTierlist(
																		event,
																		tier.tierName
																	)
																}
															></div>
															<img
																className="characterImage"
																src={character.imageURL}
																alt={character.name}
																draggable={true}
																onDragStart={() =>
																	handleTierlistDrag(character)
																}
																onDragEnd={() =>
																	setdraggingPreventHoverPlus(false)
																}
															/>
															<div
																className={`placeholder2 ${
																	draggingPreventHoverPlus ? "dragging" : ""
																}`}
																data-index={index + 1}
																onDrop={(event) =>
																	handleCardBankDropOntoTierlist(
																		event,
																		tier.tierName
																	)
																}
																onDragEnter={(
																	event: React.DragEvent<HTMLDivElement>
																) =>
																	handleCardBankDropOntoTierlist(
																		event,
																		tier.tierName
																	)
																}
															></div>
														</div>
													))}
												</div>
											</div>
											<div className="tier-config pictureIgnore">
												<div className="btn settings">
													<i
														className="tier fa fa-cog"
														aria-hidden="true"
														onClick={() =>
															handleCogWheelClick(index, tier.tierName)
														}
													></i>
												</div>
												<div>
													<div className="btn move_up">
														<i
															className="tier fa fa-chevron-up"
															aria-hidden="true"
															onClick={() =>
																handleSwapTiersClick(index, index - 1)
															}
														></i>
													</div>
													<div className="btn move_down">
														<i
															className="tier fa fa-chevron-down"
															aria-hidden="true"
															onClick={() =>
																handleSwapTiersClick(index, index + 1)
															}
														></i>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</>
					)}
					<div
						className="CharacterBank"
						onDragOver={(event) => event.preventDefault()}
						onDragEnter={() => dragAddCardBank()}
						onDragLeave={dragRemoveCardBank}
					>
						{tierlistCharacterBank.map((character, index) => (
							<img
								className={`characterImageBank${draggingPreventHoverPlus ? " dragging" : ""}`}
								key={index}
								src={character.imageURL}
								alt={character.name}
								draggable={true}
								onDragStart={() => handleCardBankDrag(character)}
								style={{ cursor: "grab" }}
								onDragEnd={() => setdraggingPreventHoverPlus(false)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCreateTierlist;
