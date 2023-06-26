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

		const tierListMap = new Map<string, Character[]>();

		// initialize the tierListMap with empty arrays for each tier
		tierOrder.forEach((tier) => {
			tierListMap.set(tier, []);
		});

		// add characters to their respective tier arrays
		this.characters.forEach((character) => {
			const tier = character.characterTier;
			if (tierListMap.has(tier)) {
				const tierArray = tierListMap.get(tier);
				tierArray?.push(character);
			}
		});

		return (
			<div className="TierlistContainer">
				<div className="TopOfTierlistContainer">
					<div className="listLogoContainer">
						<img
							className="listLogo"
							src={this.listImage}
							alt="List Logo"
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
							const charactersInTier = tierListMap.get(characterTier);
							return (
								<div
									key={characterTier}
									className={`tier-row ${characterTier}`}
								>
									<div className={`tier-name ${characterTier}-tier`}>
										{characterTier}
									</div>
									<div className="characters">
										{charactersInTier?.map((character) => (
											<div
												className="characterCard"
												key={character.name}
											>
												<img
													src={character.image}
													alt={character.name}
												/>
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
