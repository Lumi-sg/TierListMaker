import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import { importAll } from "../Helpers/importAll";
import pPlusLogo from "../assets/Logos/P+Logo.png";

const images = await importAll(
	import.meta.glob("../assets/PPlus/*.webp") as Record<string, () => Promise<{ default: string }>>
);

const templatePPlusTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Metaknight",
				imageURL: images["meta-knightpng"],
				withinTierRank: 1,
			},
			{
				name: "Zero Suit Samus",
				imageURL: images["zero-suit-samuspng"],
				withinTierRank: 2,
			},
			{
				name: "Wolf",
				imageURL: images["wolfpng"],
				withinTierRank: 3,
			},
			{
				name: "Sonic",
				imageURL: images["sonicpng"],
				withinTierRank: 1,
			},
			{
				name: "Mewtwo",
				imageURL: images["mewtwopng"],
				withinTierRank: 2,
			},
			{
				name: "Wario",
				imageURL: images["wariopng"],
				withinTierRank: 3,
			},
			{
				name: "Sheik",
				imageURL: images["sheikpng"],
				withinTierRank: 4,
			},
			{
				name: "Fox",
				imageURL: images["foxpng"],
				withinTierRank: 5,
			},
			{
				name: "Captain Falcon",
				imageURL: images["captain-falconpng"],
				withinTierRank: 6,
			},
		],
	},

	{
		tierName: TierName.A,
		characters: [
			{
				name: "Knuckles",
				imageURL: images["knucklespng"],
				withinTierRank: 1,
			},
			{
				name: "Marth",
				imageURL: images["marthpng"],
				withinTierRank: 2,
			},
			{
				name: "Lucario",
				imageURL: images["lucariopng"],
				withinTierRank: 3,
			},
			{
				name: "Ice Climbers",
				imageURL: images["ice-climberspng"],
				withinTierRank: 4,
			},
			{
				name: "Ike",
				imageURL: images["ikepng"],
				withinTierRank: 5,
			},
			{
				name: "Donkey Kong",
				imageURL: images["donkey-kongpng"],
				withinTierRank: 6,
			},
			{
				name: "Mario",
				imageURL: images["mariopng"],
				withinTierRank: 7,
			},
			{
				name: "Lucas",
				imageURL: images["lucaspng"],
				withinTierRank: 8,
			},
			{
				name: "Diddy Kong",
				imageURL: images["diddy-kongpng"],
				withinTierRank: 9,
			},
			{
				name: "Ivysaur",
				imageURL: images["ivysaurpng"],
				withinTierRank: 10,
			},
			{
				name: "Falco",
				imageURL: images["falcopng"],
				withinTierRank: 11,
			},
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Charizard",
				imageURL: images["charizardpng"],
				withinTierRank: 1,
			},
			{
				name: "Pit",
				imageURL: images["pitpng"],
				withinTierRank: 2,
			},
			{
				name: "Link",
				imageURL: images["linkpng"],
				withinTierRank: 3,
			},
			{
				name: "G&W",
				imageURL: images["mr-game-and-watchpng"],
				withinTierRank: 4,
			},
			{
				name: "Roy",
				imageURL: images["roypng"],
				withinTierRank: 5,
			},
			{
				name: "Pikachu",
				imageURL: images["pikachupng"],
				withinTierRank: 6,
			},
			{
				name: "Ness",
				imageURL: images["nesspng"],
				withinTierRank: 7,
			},
			{
				name: "ROB",
				imageURL: images["robpng"],
				withinTierRank: 8,
			},
			{
				name: "Squirtle",
				imageURL: images["squirtlepng"],
				withinTierRank: 9,
			},
			{
				name: "Toon Link",
				imageURL: images["toon-linkpng"],
				withinTierRank: 10,
			},
			{
				name: "Peach",
				imageURL: images["peachpng"],
				withinTierRank: 11,
			},
			{
				name: "Bowser",
				imageURL: images["bowserpng"],
				withinTierRank: 12,
			},
			{
				name: "Olimar",
				imageURL: images["olimarpng"],
				withinTierRank: 13,
			},
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Snake",
				imageURL: images["snakepng"],
				withinTierRank: 1,
			},
			{
				name: "Kirby",
				imageURL: images["kirbypng"],
				withinTierRank: 2,
			},
			{
				name: "Samus",
				imageURL: images["samuspng"],
				withinTierRank: 3,
			},
			{
				name: "Ganondorf",
				imageURL: images["ganondorfpng"],
				withinTierRank: 4,
			},
			{
				name: "Yoshi",
				imageURL: images["yoshipng"],
				withinTierRank: 5,
			},
			{
				name: "Zelda",
				imageURL: images["zeldapng"],
				withinTierRank: 6,
			},
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Luigi",
				imageURL: images["luigipng"],
				withinTierRank: 1,
			},
			{
				name: "King Dedede",
				imageURL: images["dededepng"],
				withinTierRank: 2,
			},
			{
				name: "Jigglypuff",
				imageURL: images["jigglypuffpng"],
				withinTierRank: 3,
			},
		],
	},
];

export const templatePPlusTierlist = new Tierlist(
	"",
	"Project +",
	"Introducing Project +: The community-driven patch for Project M. Experience enhanced gameplay with balanced rosters and exciting new mechanics, taking your Project M experience to the next level.",
	pPlusLogo,
	templatePPlusTiers,
	new Date()
);
