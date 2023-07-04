import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import StriveLogo from "../assets/Logos/GGST_Logo.png";

const images = await importAll(
	import.meta.glob("../assets/Strive/*.webp") as Record<string, () => Promise<{ default: string }>>
);

const templateStriveTiers: Tier[] = [
	{
		tierName: TierName.S,
		tierColor: "#ff7f7f",
		characters: [
			{
				name: "Happy Chaos",
				imageURL: images["18jpg"],
				withinTierRank: 1,
			},
			{
				name: "May",
				imageURL: images["03jpg"],
				withinTierRank: 2,
			},
			{
				name: "Leo",
				imageURL: images["11jpg"],
				withinTierRank: 3,
			},
			{
				name: "RamLethal",
				imageURL: images["10jpg"],
				withinTierRank: 4,
			},
			{
				name: "Jack-O",
				imageURL: images["17jpg"],
				withinTierRank: 5,
			},
		],
	},
	{
		tierName: TierName.A,
		tierColor: "#ffbf7f",
		characters: [
			{
				name: "Zato-1",
				imageURL: images["09jpg"],
				withinTierRank: 1,
			},
			{
				name: "Nagoriyuki",
				imageURL: images["12jpg"],
				withinTierRank: 2,
			},
			{
				name: "Chipp",
				imageURL: images["05jpg"],
				withinTierRank: 3,
			},
			{
				name: "Bridget",
				imageURL: images["21jpg"],
				withinTierRank: 4,
			},
			{
				name: "Baiken",
				imageURL: images["19jpg"],
				withinTierRank: 5,
			},
			{
				name: "Giovanna",
				imageURL: images["13jpg"],
				withinTierRank: 6,
			},
			{
				name: "Millia",
				imageURL: images["08jpg"],
				withinTierRank: 7,
			},
			{
				name: "Testament",
				imageURL: images["20jpg"],
				withinTierRank: 8,
			},
		],
	},
	{
		tierName: TierName.B,
		tierColor: "#ffdf7f",
		characters: [
			{
				name: "I-No",
				imageURL: images["15jpg"],
				withinTierRank: 1,
			},
			{
				name: "Goldlewis",
				imageURL: images["16jpg"],
				withinTierRank: 2,
			},
			{
				name: "Axl",
				imageURL: images["04jpg"],
				withinTierRank: 3,
			},
			{
				name: "Ky",
				imageURL: images["02jpg"],
				withinTierRank: 4,
			},
			{
				name: "Sol",
				imageURL: images["01jpg"],
				withinTierRank: 5,
			},
			{
				name: "Faust",
				imageURL: images["07jpg"],
				withinTierRank: 6,
			},
			{
				name: "Anji",
				imageURL: images["14jpg"],
				withinTierRank: 7,
			},
			{
				name: "Potemkin",
				imageURL: images["06jpg"],
				withinTierRank: 8,
			},
		],
	},
	{
		tierName: TierName.C,
		tierColor: "#bfff7f",
		characters: [
			{
				name: "Asuka",
				imageURL: images["7791381684381662"],
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.D,
		tierColor: "#7fff7f",
		characters: [
			{
				name: "Sin",
				imageURL: images["zzzzz-1669082330n5idg73diw3jpg"],
				withinTierRank: 1,
			},
		],
	},
];

export const templateStriveTierlist = new Tierlist(
	"",
	"Guilty Gear: Strive",
	"The cutting-edge 2D/3D hybrid graphics pioneered in the Guilty Gear series have been raised to the next level in “GUILTY GEAR -STRIVE.",
	StriveLogo,
	templateStriveTiers,
	new Date()
);
