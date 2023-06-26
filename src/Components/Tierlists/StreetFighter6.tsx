import { Tierlist } from "../Classes/TierlistClass";
import { Character } from "../Classes/TierlistClass";
import sf6Logo from "../../assets/Logos/Street_fighter_6_logo.webp";

const sf6Characters: Character[] = [
	{
		name: "Luke",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124113png.png",
		characterTier: "S",
		withinTierRank: 1,
	},
	{
		name: "Guile",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124224png.png",
		characterTier: "S",
		withinTierRank: 2,
	},
	{
		name: "Juri",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124243png.png",
		characterTier: "S",
		withinTierRank: 3,
	},
	{
		name: "Ken",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124254png.png",
		characterTier: "S",
		withinTierRank: 4,
	},
	{
		name: "Dee-Jay",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124341png.png",
		characterTier: "S",
		withinTierRank: 5,
	},
	{
		name: "Chun-Li",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124216png.png",
		characterTier: "A",
		withinTierRank: 1,
	},
	{
		name: "JP",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134919png.png",
		characterTier: "A",
		withinTierRank: 2,
	},
	{
		name: "E-Honda",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124329png.png",
		characterTier: "A",
		withinTierRank: 3,
	},
	{
		name: "Marisa",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134910png.png",
		characterTier: "B",
		withinTierRank: 1,
	},
	{
		name: "Ryu",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124051png.png",
		characterTier: "B",
		withinTierRank: 2,
	},
	{
		name: "Manon",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124348png.png",
		characterTier: "B",
		withinTierRank: 3,
	},
	{
		name: "Kimberly",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124235png.png",
		characterTier: "B",
		withinTierRank: 4,
	},
	{
		name: "Blanka",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124307png.png",
		characterTier: "B",
		withinTierRank: 5,
	},
	{
		name: "Cammy",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134944png.png",
		characterTier: "B",
		withinTierRank: 6,
	},
	{
		name: "Zangief",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134925png.png",
		characterTier: "C",
		withinTierRank: 1,
	},
	{
		name: "Jamie",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124135png.png",
		characterTier: "C",
		withinTierRank: 2,
	},
	{
		name: "Dhalsim",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124315png.png",
		characterTier: "D",
		withinTierRank: 1,
	},
	{
		name: "Lily",
		image: "https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134932png.png",
		characterTier: "D",
		withinTierRank: 2,
	},
];

export const sf6Tierlist = new Tierlist(
	"Street Fighter 6",
	"Fighting Game",
	"Street Fighter 6 is the latest entry in the franchise, featuring a cast of returning veterans reimagined and all-new characters. ",
	sf6Logo,
	sf6Characters
);
