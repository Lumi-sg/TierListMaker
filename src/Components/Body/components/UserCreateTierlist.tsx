import { useEffect } from "react";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useTierListStore } from "../../../Stores/tierListStore";
import { Tierlist, Tier, tierColors, Character } from "../../../Classes/TierlistClass";

const UserCreateTierlist = () => {
	const { selectedGame } = useUiNavigationStore();
	const { currentTierlist, setCurrentTierlist, tierlistCharacterBank, setTierlistCharacterBank } =
		useTierListStore();
	const prepareForUserCreatedTierlist = (tierlist: any): Tierlist => {
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

	useEffect(() => {
		const newEmptyTierList = prepareForUserCreatedTierlist(selectedGame);
		extractCharactersFromTierlist(selectedGame);
		setCurrentTierlist(newEmptyTierList);
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
										<div className={`tier-row ${tier.tierName}`}></div>
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
			<div className="CharacterBank">
				{tierlistCharacterBank.map((character, index) => (
					<img
						className="characterImage"
						key={index}
						src={character.imageURL}
						alt={character.name}
					/>
				))}
			</div>
		</>
	);
};

export default UserCreateTierlist;
