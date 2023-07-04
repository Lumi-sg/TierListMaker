import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { Character, Tier, Tierlist, tierColors } from "../../../Classes/TierlistClass";
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
		selectedGame?.tiers.map((tier) => tier.tierName) || []
	);

	const [draggingPreventHoverPlus, setdraggingPreventHoverPlus] = useState(false);
	const [draggedCharacter, setdraggedCharacter] = useState<Character | null>(null);
	const [displayModal, setdisplayModal] = useState(false);
	const [resetModalDisplay, setResetModalDisplay] = useState(false);
	const [savedTierlist, setsavedTierlist] = useState(false);

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
		resetTierlist?.tiers.forEach((tier) => {
			tier.characters = [];
		});
		setCurrentTierlist(resetTierlist!);
		setTierlistCharacterBank(copiedTemplateCharacterBank);
		setBugFixCharacterBank(copiedTemplateCharacterBank);
		setDomTierListNames(resetTierlist?.tiers.map((tier) => tier.tierName) || []);
		setResetModalDisplay(false);
		setdisplayModal(false);
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
			tiers: { tierName: string; characters: Character[] }[];
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
	}, []);

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
									if (tier.tierName.includes("-") || tier.tierName.includes("+")) {
										return null; // Skip the iteration
									}

									return (
										<div
											className="rowContainer"
											key={tier.tierName}
										>
											<div
												className={`tier-name ${tier.tierName}-tier`}
												style={{ backgroundColor: tierColors[index] }}
											>
												<input
													value={domTierListNames[index]}
													className={`tierNameInput${
														draggingPreventHoverPlus ? " dragging" : ""
													}`}
													style={{ backgroundColor: tierColors[index] }}
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
