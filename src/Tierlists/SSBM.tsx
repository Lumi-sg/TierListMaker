import { Tierlist, Tier, TierName } from "../Classes/TierlistClass";
import ssbmLogo from "../assets/Logos/logo_melee.webp";

const templateSSBMTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Fox",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/foxiconssbmpng",
				withinTierRank: 1,
			},
			{
				name: "Marth",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/marthiconssbmpng",
				withinTierRank: 2,
			},
			{
				name: "Jigglypuff",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/jigglypufficonssbmpng",
				withinTierRank: 3,
			},
			{
				name: "Falco",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/falcoiconssbmpng",
				withinTierRank: 4,
			},
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "Sheik",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/sheikiconssbmpng",
				withinTierRank: 1,
			},
			{
				name: "Captain Falcon",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/captainfalconiconssbmpng",
				withinTierRank: 2,
			},
			{
				name: "Peach",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/peachiconssbmpng",
				withinTierRank: 3,
			},
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Ice Climbers",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/iceclimbersiconssbmpng",
				withinTierRank: 1,
			},
			{
				name: "Pikachu",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/pikachuiconssbmpng",
				withinTierRank: 2,
			},
			{
				name: "Yoshi",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/yoshiiconssbmpng",
				withinTierRank: 3,
			},
			{
				name: "Samus",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/samusiconssbmpng",
				withinTierRank: 4,
			},
			{
				name: "Luigi",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/luigiiconssbmpng",
				withinTierRank: 5,
			},
			{
				name: "Dr.Mario",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/drmarioiconssbmpng",
				withinTierRank: 6,
			},
			{
				name: "Ganondorf",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/ganondorficonssbmpng",
				withinTierRank: 7,
			},
			{
				name: "Mario",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/marioiconssbmpng",
				withinTierRank: 8,
			},
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Donkey Kong",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/donkeykongiconssbmpng",
				withinTierRank: 1,
			},
			{
				name: "Young Link",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/younglinkiconssbmpng",
				withinTierRank: 2,
			},
			{
				name: "Link",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/linkiconssbmpng",
				withinTierRank: 3,
			},
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Game&Watch",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/mrgameandwatchiconssbmpng",
				withinTierRank: 1,
			},
			{
				name: "Mewtwo",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/mewtwoiconssbmpng",
				withinTierRank: 2,
			},
			{
				name: "Roy",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/royiconssbmpng",
				withinTierRank: 3,
			},
			{
				name: "Pichu",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/pichuiconssbmpng",
				withinTierRank: 4,
			},
			{
				name: "Ness",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/nessiconssbmpng",
				withinTierRank: 5,
			},
			{
				name: "Zelda",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/zeldaiconssbmpng",
				withinTierRank: 6,
			},
			{
				name: "Kirby",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/kirbyiconssbmpng",
				withinTierRank: 7,
			},
			{
				name: "Bowser",
				imageURL:
					"https://tiermaker.com/images/chart/chart/super-smash-bros-melee-2506/bowsericonssbmpng",
				withinTierRank: 8,
			},
		],
	},
];

export const templateSSBMTierlist = new Tierlist(
	"Super Smash Bros. Melee",
	"Fighting Game",
	"The Second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox and Pokémon, and Donkey Kong among others.",
	ssbmLogo,
	templateSSBMTiers
);
