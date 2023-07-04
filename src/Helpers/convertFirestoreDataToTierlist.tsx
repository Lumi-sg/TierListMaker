import { Character, Tier, Tierlist } from "../Classes/TierlistClass";

export const convertFirestoreDataToTierlist = (firestoreData: any): Tierlist | null => {
	if (!firestoreData) {
		return null;
	}
	const { name, game, description, logoImageURL, uniqueID, tiers, dateCreated } = firestoreData;

	const convertedTiers: Tier[] = tiers.map((tierData: any) => {
		const { tierName, tierColor, characters } = tierData;

		// Convert the characters array
		const convertedCharacters: Character[] = characters.map((characterData: any) => {
			const { name, imageURL, withinTierRank } = characterData;

			// Construct the Character object
			return {
				name,
				imageURL,
				withinTierRank,
			};
		});

		return {
			tierName,
			tierColor,
			characters: convertedCharacters,
		};
	});
	const convertedTierlist = new Tierlist(
		name,
		game,
		description,
		logoImageURL,
		convertedTiers,
		dateCreated,
		uniqueID
	);

	return convertedTierlist;
};
