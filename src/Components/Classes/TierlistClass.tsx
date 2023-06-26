export type Character = {
	name: string;
	image: string;
	characterTier: string;
	withinTierRank: number;
};

export class Tierlist {
	name: string;
	category: string;
	description: string;
	listImage: string;
	characters: Character[];

	constructor(
		name: string,
		category: string,
		description: string,
		listImage: string,
		characters: Character[]
	) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.listImage = listImage;
		this.characters = characters;
	}

	renderTierlist() {
		const uniqueTiers = new Set(this.characters.map((character) => character.characterTier));
		const tierOrder = ["S", "A", "B", "C", "D"];

		return (
			<div className="TierlistContainer">
				<div className="TopOfTierlistContainer">
					<div className="listLogoContainer">
						<img
							className="listLogo"
							src={this.listImage}
						/>
					</div>
					<div className="TierListTextInfo">
						<h1>{this.name}</h1>
						<p>{this.description}</p>
					</div>
				</div>

				<div className="TierList">
					{tierOrder.map((characterTier) => {
						if (uniqueTiers.has(characterTier)) {
							return (
								<div
									key={characterTier}
									className={`tier-row ${characterTier}`}
								>
									<div className={`tier-name ${characterTier}-tier`}>
										{characterTier}
									</div>
									<div className="characters">
										{this.characters
											.filter(
												(character) =>
													character.characterTier === characterTier
											)
											.map((character) => (
												<div
													className="characterCard"
													key={character.name}
												>
													<img src={character.image}></img>
												</div>
											))}
									</div>
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
		);
	}
}
