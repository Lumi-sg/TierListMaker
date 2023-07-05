export enum TierName {
	SPlus = "S+",
	S = "S",
	SMinus = "S-",
	APlus = "A+",
	A = "A",
	AMinus = "A-",
	BPlus = "B+",
	B = "B",
	BMinus = "B-",
	CPlus = "C+",
	C = "C",
	CMinus = "C-",
	DPlus = "D+",
	D = "D",
	DMinus = "D-",
}
export const DEFAULT_TIERNAMES = ["S", "A", "B", "C", "D"];

export const tierColors: string[] = [
	"#ff7f7f",
	"#ffbf7f",
	"#ffdf7f",
	"#bfff7f",
	"#7fff7f",
	"#7fffff",
	"#7fbfff",
	"#7f7fff",
	"#ff7fff",
	"#bf7fbf",
];

export type Character = {
	name: string;
	imageURL: string;
	withinTierRank: number;
};

export type Tier = {
	tierName: string;
	tierColor: string;
	characters: Character[];
};
export class Tierlist {
	name: string;
	game: string;
	description: string;
	logoImageURL: string;
	tiers: Tier[];
	dateCreated: Date;
	uniqueId?: string;

	constructor(
		name: string,
		game: string,
		description: string,
		logoImageURL: string,
		tiers: Tier[],
		dateCreated: Date,
		uniqueId?: string
	) {
		this.name = name;
		this.game = game;
		this.description = description;
		this.logoImageURL = logoImageURL;
		this.tiers = tiers;
		this.dateCreated = dateCreated;
		this.uniqueId = uniqueId;
	}

	resetTierlist(): void {
		this.tiers = [
			{
				tierName: TierName.S,
				tierColor: "#ff7f7f",
				characters: [],
			},
			{
				tierName: TierName.A,
				tierColor: "#ffbf7f",
				characters: [],
			},
			{
				tierName: TierName.B,
				tierColor: "#ffdf7f",
				characters: [],
			},
			{
				tierName: TierName.C,
				tierColor: "#bfff7f",
				characters: [],
			},
			{
				tierName: TierName.D,
				tierColor: "#7fff7f",
				characters: [],
			},
		];
	}
}
