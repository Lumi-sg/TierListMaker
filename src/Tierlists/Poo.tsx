import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import pubgLogo from "../assets/Logos/co4c1x.png";

const images = await importAll(
	import.meta.glob("../assets/Poo/*.png") as Record<string, () => Promise<{ default: string }>>
);

const pooTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "M4A1",
				imageURL: images["m416png"],
				withinTierRank: 1,
			},
			{
				name: "AK-47",
				imageURL: images["akmpng"],
				withinTierRank: 2,
			},
			{
				name: "augpng",
				imageURL: images["augpng"],
				withinTierRank: 3,
			},
			{
				name: "awmpng",
				imageURL: images["awmpng"],
				withinTierRank: 4,
			},
			{
				name: "berylpng",
				imageURL: images["berylpng"],
				withinTierRank: 5,
			},
			{
				name: "blue-zone-grenadepng",
				imageURL: images["blue-zone-grenadepng"],
				withinTierRank: 6,
			},
			{
				name: "c4png",
				imageURL: images["c4png"],
				withinTierRank: 7,
			},
			{
				name: "cowbarpng",
				imageURL: images["cowbarpng"],
				withinTierRank: 8,
			},
			{
				name: "crossbowpng",
				imageURL: images["crossbowpng"],
				withinTierRank: 9,
			},
			{
				name: "dbspng",
				imageURL: images["dbspng"],
				withinTierRank: 10,
			},
			{
				name: "deaglepng",
				imageURL: images["deaglepng"],
				withinTierRank: 11,
			},
			{
				name: "decoy-grenadepng",
				imageURL: images["decoy-grenadepng"],
				withinTierRank: 12,
			},
			{
				name: "dp28png",
				imageURL: images["dp28png"],
				withinTierRank: 13,
			},
			{
				name: "flare-gunpng",
				imageURL: images["flare-gunpng"],
				withinTierRank: 14,
			},
			{
				name: "flashbangpng",
				imageURL: images["flashbangpng"],
				withinTierRank: 15,
			},
			{
				name: "g36cpng",
				imageURL: images["g36cpng"],
				withinTierRank: 16,
			},
			{
				name: "grenadepng",
				imageURL: images["grenadepng"],
				withinTierRank: 17,
			},
			{
				name: "grozapng",
				imageURL: images["grozapng"],
				withinTierRank: 18,
			},
			{
				name: "k2png",
				imageURL: images["k2png"],
				withinTierRank: 19,
			},
			{
				name: "kar98kpng",
				imageURL: images["kar98kpng"],
				withinTierRank: 20,
			},
			{
				name: "lynxpng",
				imageURL: images["lynxpng"],
				withinTierRank: 21,
			},
			{
				name: "m16a4png",
				imageURL: images["m16a4png"],
				withinTierRank: 22,
			},
			{
				name: "m249png",
				imageURL: images["m249png"],
				withinTierRank: 23,
			},
			{
				name: "m24png",
				imageURL: images["m24png"],
				withinTierRank: 24,
			},
			{
				name: "machetepng",
				imageURL: images["machetepng"],
				withinTierRank: 25,
			},
			{
				name: "mg3png",
				imageURL: images["mg3png"],
				withinTierRank: 26,
			},
			{
				name: "micro-uzipng",
				imageURL: images["micro-uzipng"],
				withinTierRank: 27,
			},
			{
				name: "mini14png",
				imageURL: images["mini14png"],
				withinTierRank: 28,
			},
			{
				name: "mk12png",
				imageURL: images["mk12png"],
				withinTierRank: 29,
			},
			{
				name: "mk14png",
				imageURL: images["mk14png"],
				withinTierRank: 30,
			},
			{
				name: "mk47mutantpng",
				imageURL: images["mk47mutantpng"],
				withinTierRank: 31,
			},
			{
				name: "molotovpng",
				imageURL: images["molotovpng"],
				withinTierRank: 32,
			},
			{
				name: "mortarpng",
				imageURL: images["mortarpng"],
				withinTierRank: 33,
			},
			{
				name: "mosin-nagantpng",
				imageURL: images["mosin-nagantpng"],
				withinTierRank: 34,
			},
			{
				name: "mp5kpng",
				imageURL: images["mp5kpng"],
				withinTierRank: 35,
			},
			{
				name: "p18cpng",
				imageURL: images["p18cpng"],
				withinTierRank: 36,
			},
			{
				name: "p1911png",
				imageURL: images["p1911png"],
				withinTierRank: 37,
			},
			{
				name: "p90png",
				imageURL: images["p90png"],
				withinTierRank: 38,
			},
			{
				name: "p92png",
				imageURL: images["p92png"],
				withinTierRank: 39,
			},
			{
				name: "panpng",
				imageURL: images["panpng"],
				withinTierRank: 40,
			},
			{
				name: "panzerfaustpng",
				imageURL: images["panzerfaustpng"],
				withinTierRank: 41,
			},
			{
				name: "pp-19-bizonpng",
				imageURL: images["pp-19-bizonpng"],
				withinTierRank: 42,
			},
			{
				name: "qbupng",
				imageURL: images["qbupng"],
				withinTierRank: 43,
			},
			{
				name: "qbz95png",
				imageURL: images["qbz95png"],
				withinTierRank: 44,
			},
			{
				name: "r1895png",
				imageURL: images["r1895png"],
				withinTierRank: 45,
			},
			{
				name: "r45png",
				imageURL: images["r45png"],
				withinTierRank: 46,
			},
			{
				name: "s12kpng",
				imageURL: images["s12kpng"],
				withinTierRank: 47,
			},
			{
				name: "s1897png",
				imageURL: images["s1897png"],
				withinTierRank: 48,
			},
			{
				name: "s686png",
				imageURL: images["s686png"],
				withinTierRank: 49,
			},
			{
				name: "sawed-offpng",
				imageURL: images["sawed-offpng"],
				withinTierRank: 50,
			},
			{
				name: "scar-lpng",
				imageURL: images["scar-lpng"],
				withinTierRank: 51,
			},
            {
                name: "sicklepng",
                imageURL: images["sicklepng"],
                withinTierRank: 52,
            },
            {
                name: "skorpionpng",
                imageURL: images["skorpionpng"],
                withinTierRank: 53,

            },
            {
                name: "skspng",
                imageURL: images["skspng"],
                withinTierRank: 54,
            },
            {
                name: "slrpng",
                imageURL: images["slrpng"],
                withinTierRank: 55,
            },
            {
                name: "smoke-laucherpng",
                imageURL: images["smoke-laucherpng"],
                withinTierRank: 56,
            },
            {
                name: "smokebombpng",
                imageURL: images["smokebombpng"],
                withinTierRank: 57,
            },

            {
                name: "stickybombpng",
                imageURL: images["stickybombpng"],
                withinTierRank: 58,
            },
            {
                name: "tommy-gunpng",
                imageURL: images["tommy-gunpng"],
                withinTierRank: 59,
            },
            {
                name: "ump45png",
                imageURL: images["ump45png"],
                withinTierRank: 60,
            },
            {
                name: "vectorpng",
                imageURL: images["vectorpng"],
                withinTierRank: 61,
            },
            {
                name: "vsspng",
                imageURL: images["vsspng"],
                withinTierRank: 62,
            },
            {
                name: "win94png",
                imageURL: images["win94png"],
                withinTierRank: 63,
            }
		],
	},
	{
		tierName: TierName.A,
		characters: [],
	},
	{
		tierName: TierName.B,
		characters: [],
	},
	{
		tierName: TierName.C,
		characters: [],
	},
	{
		tierName: TierName.D,
		characters: [],
	},
];

export const templatePooTierlist = new Tierlist(
	"",
	"PUBG",
	" Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.",
	pubgLogo,
	pooTiers,
	new Date()
);
