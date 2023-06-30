import { Tierlist, Tier, TierName } from "../Classes/TierlistClass";
import StriveLogo from "../assets/Logos/GGST_Logo.png";

const templateStriveTiers: Tier[] = [
	{
		tierName: TierName.S,
		characters: [
			{
				name: "Happy Chaos",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/82nceh3sjpeg.png",
				withinTierRank: 1,
			},
			{
				name: "May",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivemay-1jpeg.png",
				withinTierRank: 2,
			},
			{
				name: "Leo",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archiveleojpeg.png",
				withinTierRank: 3,
			},
			{
				name: "RamLethal",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archiveram-1jpeg.png",
				withinTierRank: 4,
			},
			{
				name: "Jack-O",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/jkojpeg.png",
				withinTierRank: 5,
			},
		],
	},
	{
		tierName: TierName.A,
		characters: [
			{
				name: "Zato-1",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivezatjpeg.png",
				withinTierRank: 1,
			},
			{
				name: "Nagoriyuki",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivenagjpeg.png",
				withinTierRank: 2,
			},
			{
				name: "Chipp",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivechpjpeg.png",
				withinTierRank: 3,
			},
			{
				name: "Bridget",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/zzzzz-1663086668bridgetjpeg.png",
				withinTierRank: 4,
			},
			{
				name: "Baiken",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/94gvos0fjpeg.png",
				withinTierRank: 5,
			},
			{
				name: "Giovanna",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivegiojpeg.png",
				withinTierRank: 6,
			},
			{
				name: "Millia",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivemlljpeg.png",
				withinTierRank: 7,
			},
			{
				name: "Testament",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/icon-1ubduiakjpeg.png",
				withinTierRank: 8,
			},
		],
	},
	{
		tierName: TierName.B,
		characters: [
			{
				name: "I-No",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/rxx82us-1-306x305jpeg.png",
				withinTierRank: 1,
			},
			{
				name: "Goldlewis",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/gol-306x305jpeg.png",
				withinTierRank: 2,
			},
			{
				name: "Axl",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archiveaxljpeg.png",
				withinTierRank: 3,
			},
			{
				name: "Ky",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivekykjpeg.png",
				withinTierRank: 4,
			},
			{
				name: "Sol",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivejpeg.png",
				withinTierRank: 5,
			},
			{
				name: "Faust",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivefaujpeg.png",
				withinTierRank: 6,
			},
			{
				name: "Anji",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/anji-306x305jpeg.png",
				withinTierRank: 7,
			},
			{
				name: "Potemkin",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/archivepotjpeg.png",
				withinTierRank: 8,
			},
		],
	},
	{
		tierName: TierName.C,
		characters: [
			{
				name: "Asuka",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/zzzzz-1678893007bedmanjpeg.png",
				withinTierRank: 1,
			},
		],
	},
	{
		tierName: TierName.D,
		characters: [
			{
				name: "Sin",
				imageURL:
					"https://tiermaker.com/images/chart/chart/guilty-gear-strive-characters-2/zzzzz-1678892996sinjpeg.png",
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
	templateStriveTiers
);
