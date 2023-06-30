import { Tierlist, Tier, TierName } from "../Classes/TierlistClass";
import sf6Logo from "../assets/Logos/Street_fighter_6_logo.webp";

const sf6Tiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Luke",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124113png.png",
				withinTierRank: 1,
			},
			{
				name: "Guile",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124224png.png",
				withinTierRank: 2,
			},
			{
				name: "Juri",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124243png.png",
				withinTierRank: 3,
			},
			{
				name: "Ken",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124254png.png",
				withinTierRank: 4,
			},
			{
				name: "Dee-Jay",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124341png.png",
				withinTierRank: 5,
			},
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "Chun-Li",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124216png.png",
				withinTierRank: 1,
			},
			{
				name: "JP",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134919png.png",
				withinTierRank: 2,
			},
			{
				name: "E-Honda",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124329png.png",
				withinTierRank: 3,
			},
			// Add more characters for tier A
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "Marisa",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134910png.png",
				withinTierRank: 1,
			},
			{
				name: "Ryu",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124051png.png",
				withinTierRank: 2,
			},
			{
				name: "Manon",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124348png.png",
				withinTierRank: 3,
			},
			{
				name: "Kimberly",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124235png.png",
				withinTierRank: 4,
			},
			{
				name: "Blanka",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124307png.png",
				withinTierRank: 5,
			},
			{
				name: "Cammy",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134944png.png",
				withinTierRank: 6,
			},
			// Add more characters for tier B
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Zangief",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134925png.png",
				withinTierRank: 1,
			},
			{
				name: "Jamie",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124135png.png",
				withinTierRank: 2,
			},
			// Add more characters for tier C
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Dhalsim",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-124315png.png",
				withinTierRank: 1,
			},
			{
				name: "Lily",
				imageURL:
					"https://tiermaker.com/images/template_images/2022/276810/street-fighter-6-all-characters--sf6-official-roster-276810/screenshot-2023-02-24-at-134932png.png",
				withinTierRank: 2,
			},
			// Add more characters for tier D
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
