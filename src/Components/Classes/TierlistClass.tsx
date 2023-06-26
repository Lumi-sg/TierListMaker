export enum TierName {
	S = "S",
	A = "A",
	B = "B",
	C = "C",
	D = "D",
}

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
					{this.tiers.map((tier) => (
						<div
							key={tier.tierName}
							className={`tier-row ${tier.tierName}`}
						>
							<div className={`tier-name ${tier.tierName}-tier`}>{tier.tierName}</div>
							<div className="characters">
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
}
