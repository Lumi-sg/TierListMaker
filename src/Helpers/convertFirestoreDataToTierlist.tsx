import { Tierlist, Tier, Character } from "../Classes/TierlistClass";

export const convertFirestoreDataToTierlist = (firestoreData: any): Tierlist | null => {
	if (!firestoreData) {
		return null;
	}
	const { name, category, description, logoImageURL, uniqueID, tiers } = firestoreData;

	const convertedTiers: Tier[] = tiers.map((tierData: any) => {
		const { tierName, characters } = tierData;

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
			characters: convertedCharacters,
		};
	});
	const convertedTierlist = new Tierlist(
		name,
		category,
		description,
		logoImageURL,
		convertedTiers,
		uniqueID
	);
	return convertedTierlist;
};
