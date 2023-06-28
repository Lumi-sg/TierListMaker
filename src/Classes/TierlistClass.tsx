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

const tierColors: string[] = [
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
	category: string;
	description: string;
	logoImageURL: string;
	tiers: Tier[];

	constructor(
		name: string,
		category: string,
		description: string,
		logoImageURL: string,
		tiers: Tier[]
	) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.logoImageURL = logoImageURL;
		this.tiers = tiers;
	}

	renderTierlist() {
		return (
			<div className="TierlistContainer">
				<div className="TopOfTierlistContainer">
					<div className="listLogoContainer">
						<img
							className="listLogo"
							src={this.logoImageURL}
							alt="List Logo"
						/>
					</div>
					<div className="TierListTextInfo">
						<h1>{this.name}</h1>
						<p>{this.description}</p>
					</div>
				</div>

				<div className="TierList">
					{this.tiers.map((tier, index) => (
						<div
							key={tier.tierName}
							className={`tier-row ${tier.tierName}`}
						>
							<div
								className={`tier-name ${tier.tierName}-tier`}
								style={{ backgroundColor: tierColors[index] }}
							>
								{tier.tierName}
							</div>
							<div className={`characters ${tier.tierName}`}>
								{tier.characters.map((character) => (
									<div
										className="characterCard"
										key={character.name}
									>
										<img
											src={character.imageURL}
											alt={character.name}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	renderCardBank() {
		return (
			<div className="CardbankContainer">
				<div className="cardBankCharacters">
					{this.tiers.map((tier) =>
						tier.characters.map((character) => (
							<img
								draggable={true}
								src={character.imageURL}
								alt={character.name}
								key={character.name}
							/>
						))
					)}
				</div>
			</div>
		);
	}

	emptyTierListDOM() {
		const characterCard = document.querySelectorAll(".characterCard");
		characterCard.forEach((characterCard) => {
			characterCard.remove();
		});
	}
}
