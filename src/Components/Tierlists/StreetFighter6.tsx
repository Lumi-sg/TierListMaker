import { Tierlist } from "../Classes/TierlistClass";
import { Character } from "../Classes/TierlistClass";

const dummyCharacters: Character[] = [
	{
		name: "Ryu",
		image: "ryu.png",
		characterTier: "S",
		withinTierRank: 2,
	},
	{
		name: "Ken",
		image: "ken.png",
		characterTier: "A",
		withinTierRank: 1,
	},
	{
		name: "Chun-Li",
		image: "chun-li.png",
		characterTier: "B",
		withinTierRank: 3,
	},
	{
		name: "Guile",
		image: "guile.png",
		characterTier: "B",
		withinTierRank: 5,
	},
];

export const dummyTierlist = new Tierlist(
	"Street Fighter 6",
	"Fighting Game",
	"Sample Tierlist",
	dummyCharacters
);
