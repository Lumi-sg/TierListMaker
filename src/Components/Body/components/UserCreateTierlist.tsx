import { useEffect } from "react";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useTierListStore } from "../../../Stores/tierListStore";
import { Tierlist, Tier, Character, tierColors } from "../../../Classes/TierlistClass";

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

	const extractCharactersFromTierlist = (tierlist: any): Character[] => {
		const charactersArray = tierlist.tiers.map((tier: Tier) => tier.characters);
		return charactersArray;
	};

	useEffect(() => {
		const newEmptyTierList = prepareForUserCreatedTierlist(selectedGame);
		const charactersArray = extractCharactersFromTierlist(selectedGame);
		setCurrentTierlist(newEmptyTierList);
		setTierlistCharacterBank(charactersArray);
	}, []);

	useEffect(() => {
		console.table(currentTierlist);
	}, [currentTierlist]);

	useEffect(() => {
		console.table(tierlistCharacterBank);
	}, [tierlistCharacterBank]);

	return (
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
						{currentTierlist.tiers.map((tier, index) => (
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
								<div className={`tier-row ${tier.tierName}`}>
									<div className="characterImages">
										{tier.characters.map((character, characterIndex) => (
											<img
												className="characterImage"
												key={characterIndex}
												src={character.imageURL}
												alt={character.name}
											/>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default UserCreateTierlist;
