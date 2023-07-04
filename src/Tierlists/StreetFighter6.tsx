import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import sf6Logo from "../assets/Logos/Street_fighter_6_logo.webp";

const images = await importAll(
	import.meta.glob("../assets/SF6/*.webp") as Record<string, () => Promise<{ default: string }>>
);

const sf6Tiers: Tier[] = [
	{
		tierName: TierName.S,
		tierColor: "#ff7f7f",
		characters: [
			{
				name: "Luke",
				imageURL: images["Luke"],
				withinTierRank: 1,
			},
			{
				name: "Guile",
				imageURL: images["Guile"],
				withinTierRank: 2,
			},
			{
				name: "Juri",
				imageURL: images["Juri"],
				withinTierRank: 3,
			},
			{
				name: "Ken",
				imageURL: images["Ken"],
				withinTierRank: 4,
			},
			{
				name: "Dee-Jay",
				imageURL: images["DJ"],
				withinTierRank: 5,
			},
		],
	},
	{
		tierName: TierName.A,
		tierColor: "#ffbf7f",
		characters: [
			{
				name: "ChunLi",
				imageURL: images["ChunLi"],
				withinTierRank: 1,
			},
			{
				name: "JP",
				imageURL: images["JP"],
				withinTierRank: 2,
			},
			{
				name: "Ehonda",
				imageURL: images["Ehonda"],
				withinTierRank: 3,
			},
		],
	},
	{
		tierName: TierName.B,
		tierColor: "#ffdf7f",
		characters: [
			{
				name: "Marisa",
				imageURL: images["Marisa"],
				withinTierRank: 1,
			},
			{
				name: "Ryu",
				imageURL: images["Ryu"],
				withinTierRank: 2,
			},
			{
				name: "Manon",
				imageURL: images["Manon"],
				withinTierRank: 3,
			},
			{
				name: "Kimberly",
				imageURL: images["Kimberly"],
				withinTierRank: 4,
			},
			{
				name: "Blanka",
				imageURL: images["Blanka"],
				withinTierRank: 5,
			},
			{
				name: "Cammy",
				imageURL: images["Cammy"],
				withinTierRank: 6,
			},
		],
	},
	{
		tierName: TierName.C,
		tierColor: "#bfff7f",
		characters: [
			{
				name: "Zangief",
				imageURL: images["Zangief"],
				withinTierRank: 1,
			},
			{
				name: "Jamie",
				imageURL: images["Jamie"],
				withinTierRank: 2,
			},
		],
	},
	{
		tierName: TierName.D,
		tierColor: "#7fff7f",
		characters: [
			{
				name: "Dhalsim",
				imageURL: images["Dhalsim"],
				withinTierRank: 1,
			},
			{
				name: "Lily",
				imageURL: images["Lily"],
				withinTierRank: 2,
			},
		],
	},
];

export const sf6Tierlist = new Tierlist(
	"",
	"Street Fighter 6",
	"Street Fighter 6 is the latest entry in the franchise, featuring a cast of returning veterans reimagined and new characters joining the fight.",
	sf6Logo,
	sf6Tiers,
	new Date()
);
