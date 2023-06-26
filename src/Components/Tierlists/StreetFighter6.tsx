import { Tierlist } from "../Classes/TierlistClass";
import { Character } from "../Classes/TierlistClass";
import sf6Logo from "../../assets/Logos/Street_fighter_6_logo.webp"

const dummyCharacters: Character[] = [
	{
		name: "Luke",
		image: "luke.png",
		characterTier: "S",
		withinTierRank: 1,
	},
	{
		name: "Guile",
		image: "guile.png",
		characterTier: "S",
		withinTierRank: 2,
	},
	{
		name: "Juri",
		image: "juri.png",
		characterTier: "S",
		withinTierRank: 3,
	},
	{
		name: "Ken",
		image: "ken.png",
		characterTier: "S",
		withinTierRank: 4,
	},
	{
		name: "Dee-Jay",
		image: "dee-jay.png",
		characterTier: "S",
		withinTierRank: 5,
	},
	{
		name: "Chun-Li",
		image: "chun-li.png",
		characterTier: "A",
		withinTierRank: 1,
	},
	{
		name: "JP",
		image: "jp.png",
		characterTier: "A",
		withinTierRank: 2,
	},
	{
		name: "E-Honda",
		image: "e-honda.png",
		characterTier: "A",
		withinTierRank: 3,
	},
	{
		name: "Marisa",
		image: "marisa.png",
		characterTier: "B",
		withinTierRank: 1,
	},
	{
		name: "Ryu",
		image: "ryu.png",
		characterTier: "B",
		withinTierRank: 2,
	},
	{
		name: "Manon",
		image: "manon.png",
		characterTier: "B",
		withinTierRank: 3,
	},
	{
		name: "Kimberly",
		image: "kimberly.png",
		characterTier: "B",
		withinTierRank: 4,
	},
	{
		name: "Blanka",
		image: "blanka.png",
		characterTier: "B",
		withinTierRank: 5,
	},
	{
		name: "Cammy",
		image: "cammy.png",
		characterTier: "B",
		withinTierRank: 6,
	},
	{
		name: "Zangief",
		image: "zangief.png",
		characterTier: "C",
		withinTierRank: 1,
	},
	{
		name: "Jamie",
		image: "jamie.png",
		characterTier: "C",
		withinTierRank: 2,
	},
	{
		name: "Dhalsim",
		image: "dhalsim.png",
		characterTier: "D",
		withinTierRank: 1,
	},
	{
		name: "Lily",
		image: "lily.png",
		characterTier: "D",
		withinTierRank: 2,
	},
];

export const dummyTierlist = new Tierlist(
	"Street Fighter 6",
	"Fighting Game",
	"Street Fighter 6 is the latest entry in the franchise, featuring a cast of returning veterans reimagined and all-new characters. ",
	sf6Logo,
	dummyCharacters
);
