import { useEffect, useRef, useState } from "react";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useTierListStore } from "../../../Stores/tierListStore";
import { Tierlist, Tier, tierColors, Character } from "../../../Classes/TierlistClass";
import { useUserStore } from "../../../Stores/userStore";
import { firestoreDB } from "../../../main";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { handleDownloadClick } from "../../../Helpers/handleDownloadClick";

const UserCreateTierlist = () => {
	const { selectedGame, isDragging, setIsDragging } = useUiNavigationStore();
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
		const tempCharacterBank: Character[] = [];
		tierlist?.tiers.forEach((tier) => {
			tier.characters.forEach((character) => {
				tempCharacterBank.push(character);
			});
		});
		console.table(tempCharacterBank);

		if (!tempCharacterBank || !tempCharacterBank.length || tempCharacterBank === undefined) {
			setcopiedTemplateCharacterBank(bugFixCharacterBank);
			setTierlistCharacterBank(bugFixCharacterBank);
			console.log("used backup");
		} else {
			setcopiedTemplateCharacterBank(tempCharacterBank);
			setTierlistCharacterBank(tempCharacterBank);
		}
	};

	const handleCardBankDrag = (event: React.DragEvent<HTMLImageElement>, character: Character) => {
		event.dataTransfer.setData("text/plain", JSON.stringify(character));
		console.log(`drag started: ${character.name}`);
	};

	const handleTierlistDrag = (
		event: React.DragEvent<HTMLDivElement>,
		character: Character,
		tierName: string
	) => {
		event.dataTransfer.setData("text/plain", JSON.stringify(character));
		console.log(`drag started: ${character.name}`);
		const updatedTierList = currentTierlist;
		updatedTierList!.tiers.forEach((tier) => {
			if (tier.tierName === tierName) {
				tier.characters.splice(tier.characters.indexOf(character), 1);
				console.log("removed from tierlist");
			}
		});
	};

	function removeCharFromBank(character: Character) {
		const updatedCharacterBank = tierlistCharacterBank.filter(
			(draggedChar) => draggedChar.name !== character.name
		);
		setTierlistCharacterBank(updatedCharacterBank);
	}

	const handleCardBankDropOntoTierlist = (
		event: React.DragEvent<HTMLDivElement>,
		tierName: string
	) => {
		event.preventDefault();
		event.stopPropagation();
		const insertCharacterAtIndex = event.currentTarget.getAttribute("data-index");
		console.log(insertCharacterAtIndex);
		if (insertCharacterAtIndex !== null) {
			const index = parseInt(insertCharacterAtIndex);

			console.log("placeholder detected");
			console.log(`insert character at index ${insertCharacterAtIndex}`);
			const characterData = event.dataTransfer.getData("text/plain");
			const character = JSON.parse(characterData) as Character;
			console.log(`dropped: ${character.name}`);
			removeCharFromBank(character);

			const updatedTierlist = currentTierlist;
			updatedTierlist!.tiers.forEach((tier) => {
				if (tier.tierName === tierName) {
					console.log(`found tier: ${tierName}`);
					tier.characters.splice(index, 0, character);
				}
			});
			setCurrentTierlist(updatedTierlist!);

			return;
		}
		const characterData = event.dataTransfer.getData("text/plain");
		const character = JSON.parse(characterData) as Character;
		console.log(`dropped: ${character.name}`);
		removeCharFromBank(character);

		const updatedTierlist = currentTierlist;
		updatedTierlist!.tiers.forEach((tier) => {
			if (tier.tierName === tierName) {
				console.log(`found tier: ${tierName}`);
				tier.characters.push(character);
			}
		});

		setCurrentTierlist(updatedTierlist!);
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
	};

	const handleSaveTierlistClick = async () => {
		if (tierlistName === "") {
			console.log("tierlist name is empty");
			return;
		}
		setTierlistName("saving!");
		try {
			const tierlistObject = {
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
			const docRef = await addDoc(collection(firestoreDB, "tierlistData"), {
				userID: currentUserData?.uid,
				tierlist: tierlistObject,
				displayName: currentUserData?.displayName,
				email: currentUserData?.email,
			});
			setTierlistName("");
			console.log("Document written with ID: ", docRef.id);
			handleResetClick();

			return docRef.id;
		} catch (error) {
			console.log("Error saving tierlist:", error);
		}
	};

	const handleTierListNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTierlistName(event.target.value);
	};

	const changeTierNameChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		tierIndex: number
	) => {
		const updatedTierListNames = [...domTierListNames];
		updatedTierListNames[tierIndex] = event.target.value;
		setDomTierListNames(updatedTierListNames);

		console.log(`changed tier name to ${event.target.value} at index ${tierIndex}`);
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
		<div
		// onMouseDown={handleMouseDown}
		// onMouseUp={handleMouseUp}
		>
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
								onClick={handleResetClick}
							>
								Reset Tierlist
							</button>
						</div>
						<div
							className="TierList"
							ref={tierlistRef}
						>
							{currentTierlist.tiers.map((tier, index) => {
								// if (tier.tierName.includes("-") || tier.tierName.includes("+")) {
								// 	return null; // Skip the iteration
								// }

								return (
									<div
										className="rowContainer"
										key={tier.tierName}
										onMouseEnter={() => setIsDragging(true)}
										onMouseLeave={() => setIsDragging(false)}
									>
										<div
											className={`tier-name ${tier.tierName}-tier`}
											style={{ backgroundColor: tierColors[index] }}
										>
											<input
												value={domTierListNames[index]}
												className="tierNameInput"
												style={{ backgroundColor: tierColors[index] }}
												onChange={(event) =>
													changeTierNameChange(event, index)
												}
												required
											/>
										</div>
										<div
											className={`tier-row ${tier.tierName}`}
											onDrop={(event: React.DragEvent<HTMLDivElement>) =>
												handleCardBankDropOntoTierlist(event, tier.tierName)
											}
											onDragOver={handleDragOver}
										>
											<div className="characterImages">
												{tier.characters.map((character, index) => (
													<div
														className="characterContainer"
														key={index}
													>
														<div
															className={`placeholder1 ${
																isDragging ? "dragging" : ""
															}`}
															data-index={index}
															onDrop={(event) =>
																handleCardBankDropOntoTierlist(
																	event,
																	tier.tierName
																)
															}
															onDragOver={handleDragOver}
														></div>
														<img
															className="characterImage"
															src={character.imageURL}
															alt={character.name}
															draggable={true}
															onDragStart={(event) =>
																handleTierlistDrag(
																	event,
																	character,
																	tier.tierName
																)
															}
														/>
														<div
															className={`placeholder2 ${
																isDragging ? "dragging" : ""
															}`}
															data-index={index + 1}
															onDrop={(event) =>
																handleCardBankDropOntoTierlist(
																	event,
																	tier.tierName
																)
															}
															onDragOver={handleDragOver}
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
				<div className="CharacterBank">
					{tierlistCharacterBank.map((character, index) => (
						<img
							className="characterImageBank"
							key={index}
							src={character.imageURL}
							alt={character.name}
							draggable={true}
							onDragStart={(event) => handleCardBankDrag(event, character)}
							style={{ cursor: "grab" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default UserCreateTierlist;
