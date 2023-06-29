import { useEffect } from "react";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useTierListStore } from "../../../Stores/tierListStore";
import { Tierlist, Tier, tierColors, Character } from "../../../Classes/TierlistClass";

const UserCreateTierlist = () => {
	const { selectedGame } = useUiNavigationStore();
	const { currentTierlist, setCurrentTierlist, tierlistCharacterBank, setTierlistCharacterBank } =
		useTierListStore();
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
			tierlist.category,
			tierlist.description,
			tierlist.logoImageURL,
			emptyTiers
		);
	};

	const extractCharactersFromTierlist = (tierlist: Tierlist | null) => {
		const tempCharacterBank: Character[] = [];
		tierlist?.tiers.forEach((tier) => {
			tier.characters.forEach((character) => {
				tempCharacterBank.push(character);
			});
		});
		setTierlistCharacterBank(tempCharacterBank);
	};

	const handleCardBankDrag = (event: React.DragEvent<HTMLImageElement>, character: Character) => {
		event.dataTransfer.setData("text/plain", JSON.stringify(character));
		console.log(`drag started: ${character.name}`);
	};

	const handleCardBankDrop = (event: React.DragEvent<HTMLImageElement>) => {
		event.preventDefault();
		const characterData = event.dataTransfer.getData("text/plain");
		const character = JSON.parse(characterData) as Character;
		console.log(`dropped: ${character.name}`);
		removeCharFromBank();

		function removeCharFromBank() {
			const updatedCharacterBank = tierlistCharacterBank.filter(
				(draggedChar) => draggedChar.name !== character.name
			);
			setTierlistCharacterBank(updatedCharacterBank);
		}
	};

	const handleDragOver = (event: React.DragEvent<HTMLImageElement>) => {
		event.preventDefault();
	};

	useEffect(() => {
		const newEmptyTierList = prepareForUserCreatedTierlist(selectedGame);
		extractCharactersFromTierlist(selectedGame);
		setCurrentTierlist(newEmptyTierList!);
	}, []);

	useEffect(() => {}, [tierlistCharacterBank]);
	return (
		<>
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
								<h1>{currentTierlist.name}</h1>
								<p>{currentTierlist.description}</p>
							</div>
						</div>

						<div className="TierList">
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
											{tier.tierName}
										</div>
										<div
											className={`tier-row ${tier.tierName}`}
											onDrop={handleCardBankDrop}
											onDragOver={handleDragOver}
										></div>
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
		</>
	);
};

export default UserCreateTierlist;
