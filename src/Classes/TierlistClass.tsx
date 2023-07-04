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
	tierName: TierName;
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

	swapTiers(indexA: number, indexB: number) {
		[this.tiers[indexA], this.tiers[indexB]] = [this.tiers[indexB], this.tiers[indexA]];
		console.log("Tiers swapped!");
	}
}
