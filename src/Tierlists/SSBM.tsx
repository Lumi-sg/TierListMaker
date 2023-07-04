import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import ssbmLogo from "../assets/Logos/logo_melee.webp";
const images = await importAll(
	import.meta.glob("../assets/SSBM/*.webp") as Record<string, () => Promise<{ default: string }>>
);

const templateSSBMTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Fox",
				imageURL: images["foxiconssbmpng"],
				withinTierRank: 1,
			},
			{
				name: "Marth",
				imageURL: images["marthiconssbmpng"],
				withinTierRank: 2,
			},
			{
				name: "Jigglypuff",
				imageURL: images["jigglypufficonssbmpng"],
				withinTierRank: 3,
			},
			{
				name: "Falco",
				imageURL: images["falcoiconssbmpng"],
				withinTierRank: 4,
			},
			// Add more characters here
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "Sheik",
				imageURL: images["sheikiconssbmpng"],
				withinTierRank: 1,
			},
			{
				name: "Captain Falcon",
				imageURL: images["captainfalconiconssbmpng"],
				withinTierRank: 2,
			},
			{
				name: "Peach",
				imageURL: images["peachiconssbmpng"],
				withinTierRank: 3,
			},
			// Add more characters here
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Ice Climbers",
				imageURL: images["iceclimbersiconssbmpng"],
				withinTierRank: 1,
			},
			{
				name: "Pikachu",
				imageURL: images["pikachuiconssbmpng"],
				withinTierRank: 2,
			},
			{
				name: "Yoshi",
				imageURL: images["yoshiiconssbmpng"],
				withinTierRank: 3,
			},
			{
				name: "Samus",
				imageURL: images["samusiconssbmpng"],
				withinTierRank: 4,
			},
			{
				name: "Luigi",
				imageURL: images["luigiiconssbmpng"],
				withinTierRank: 5,
			},
			{
				name: "Dr.Mario",
				imageURL: images["drmarioiconssbmpng"],
				withinTierRank: 6,
			},
			{
				name: "Ganondorf",
				imageURL: images["ganondorficonssbmpng"],
				withinTierRank: 7,
			},
			{
				name: "Mario",
				imageURL: images["marioiconssbmpng"],
				withinTierRank: 8,
			},
			// Add more characters here
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Donkey Kong",
				imageURL: images["donkeykongiconssbmpng"],
				withinTierRank: 1,
			},
			{
				name: "Young Link",
				imageURL: images["younglinkiconssbmpng"],
				withinTierRank: 2,
			},
			{
				name: "Link",
				imageURL: images["linkiconssbmpng"],
				withinTierRank: 3,
			},
			// Add more characters here
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Game&Watch",
				imageURL: images["mrgameandwatchiconssbmpng"],
				withinTierRank: 1,
			},
			{
				name: "Mewtwo",
				imageURL: images["mewtwoiconssbmpng"],
				withinTierRank: 2,
			},
			{
				name: "Roy",
				imageURL: images["royiconssbmpng"],
				withinTierRank: 3,
			},
			{
				name: "Pichu",
				imageURL: images["pichuiconssbmpng"],
				withinTierRank: 4,
			},
			{
				name: "Ness",
				imageURL: images["nessiconssbmpng"],
				withinTierRank: 5,
			},
			{
				name: "Zelda",
				imageURL: images["zeldaiconssbmpng"],
				withinTierRank: 6,
			},
			{
				name: "Kirby",
				imageURL: images["kirbyiconssbmpng"],
				withinTierRank: 7,
			},
			{
				name: "Bowser",
				imageURL: images["bowsericonssbmpng"],
				withinTierRank: 8,
			},
		],
	},
];

export const templateSSBMTierlist = new Tierlist(
	"",
	"Super Smash Bros. Melee",
	"The Second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox and Pokémon, and Donkey Kong among others.",
	ssbmLogo,
	templateSSBMTiers,
	new Date()
);
