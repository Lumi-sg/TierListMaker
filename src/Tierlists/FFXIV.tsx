import { Tier, TierName, Tierlist } from "../Classes/TierlistClass";
import SCH from "../assets/FFXIV/1.webp";
import WHM from "../assets/FFXIV/10.webp";
import RDM from "../assets/FFXIV/11.webp";
import PLD from "../assets/FFXIV/12.webp";
import MCH from "../assets/FFXIV/13.webp";
import SAM from "../assets/FFXIV/14.webp";
import WAR from "../assets/FFXIV/15.webp";
import SMN from "../assets/FFXIV/16.webp";
import DRG from "../assets/FFXIV/17.webp";
import DNC from "../assets/FFXIV/18.webp";
import RPR from "../assets/FFXIV/19.webp";
import DRK from "../assets/FFXIV/2.webp";
import SGE from "../assets/FFXIV/20.webp";
import BLM from "../assets/FFXIV/3.webp";
import MNK from "../assets/FFXIV/4.webp";
import BRD from "../assets/FFXIV/5.webp";
import NIN from "../assets/FFXIV/6.webp";
import GNB from "../assets/FFXIV/7.webp";
import AST from "../assets/FFXIV/8.webp";
import BLU from "../assets/FFXIV/9.webp";
import FFXIVLogo from "../assets/Logos/co48rz.webp";




const templateFFXIVTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Sage",
				imageURL: SCH,
				withinTierRank: 1,
			},
			{
				name: "Dark Knight",
				imageURL: DRK,
				withinTierRank: 2,
			},
			{
				name: "Sage",
				imageURL: SGE,
				withinTierRank: 3,
			},
			{
				name: "Black Mage",
				imageURL: BLM,
				withinTierRank: 4,
			},
			{
				name: "Monk",
				imageURL: MNK,
				withinTierRank: 5,
			},
			{
				name: "Bard",
				imageURL: BRD,
				withinTierRank: 6,
			},
			{
				name: "Ninja",
				imageURL: NIN,
				withinTierRank: 7,
			},
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "White Mage",
				imageURL: WHM,
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Red Mage",
				imageURL: RDM,
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Paladin",
				imageURL: PLD,
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Machinist",
				imageURL: MCH,
				withinTierRank: 1,
			},
			{
				name: "Samurai",
				imageURL: SAM,
				withinTierRank: 1,
			},
			{
				name: "Warrior",
				imageURL: WAR,
				withinTierRank: 1,
			},
			{
				name: "Summoner",
				imageURL: SMN,
				withinTierRank: 1,
			},
			{
				name: "Dragoon",
				imageURL: DRG,
				withinTierRank: 1,
			},
			{
				name: "Dancer",
				imageURL: DNC,
				withinTierRank: 1,
			},
			{
				name: "Reaper",
				imageURL: RPR,
				withinTierRank: 1,
			},
			{
				name: "Gunbreaker",
				imageURL: GNB,
				withinTierRank: 1,
			},
			{
				name: "Astrologian",
				imageURL: AST,
				withinTierRank: 1,
			},
			{
				name: "Blue Mage",
				imageURL: BLU,
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
