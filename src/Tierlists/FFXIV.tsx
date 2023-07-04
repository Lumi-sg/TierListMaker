import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import FFXIVLogo from "../assets/Logos/co48rz.webp";

const images = await importAll(
	import.meta.glob("../assets/FFXIV/*.webp") as Record<string, () => Promise<{ default: string }>>
);

const templateFFXIVTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Scholar",
				imageURL: images["1"],
				withinTierRank: 1,
			},
			{
				name: "Dark Knight",
				imageURL: images["2"],
				withinTierRank: 2,
			},
			{
				name: "Black Mage",
				imageURL: images["3"],
				withinTierRank: 3,
			},
			{
				name: "Monk",
				imageURL: images["4"],
				withinTierRank: 4,
			},
			{
				name: "Bard",
				imageURL: images["5"],
				withinTierRank: 5,
			},
			{
				name: "Ninja",
				imageURL: images["6"],
				withinTierRank: 6,
			},
			{
				name: "Gunbreaker",
				imageURL: images["7"],
				withinTierRank: 7,
			},
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "Astrologian",
				imageURL: images["8"],
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Blue Mage",
				imageURL: images["9"],
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "White Mage",
				imageURL: images["10"],
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Red Mage",
				imageURL: images["11"],
				withinTierRank: 1,
			},
			{
				name: "Paladin",
				imageURL: images["12"],
				withinTierRank: 1,
			},
			{
				name: "Machinist",
				imageURL: images["13"],
				withinTierRank: 1,
			},
			{
				name: "Samurai",
				imageURL: images["14"],
				withinTierRank: 1,
			},

			{
				name: "Warrior",
				imageURL: images["15"],
				withinTierRank: 1,
			},
			{
				name: "Summoner",
				imageURL: images["16"],
				withinTierRank: 1,
			},
			{
				name: "Dragoon",
				imageURL: images["17"],
				withinTierRank: 1,
			},
			{
				name: "Dancer",
				imageURL: images["18"],
				withinTierRank: 1,
			},
			{
				name: "Reaper",
				imageURL: images["19"],
				withinTierRank: 1,
			},
			{
				name: "Sage",
				imageURL: images["20"],
				withinTierRank: 1,
			},
		],
	},
];

export const templateFFXIVTierlist = new Tierlist(
	"",
	"FFXIV",
	"Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
	FFXIVLogo,
	templateFFXIVTiers,
	new Date()
);
