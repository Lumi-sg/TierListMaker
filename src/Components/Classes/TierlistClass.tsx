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
	characters: Character[];

	constructor(name: string, category: string, description: string, characters: Character[]) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.characters = characters;
	}

	renderTierlist() {
		const uniqueTiers = new Set(this.characters.map((character) => character.characterTier));

		return (
			<div className="TierlistContainer">
				<div className="TierListTextInfo">
					<h1>{this.name}</h1>
					<p>Category: {this.category}</p>
					<p>Description: {this.description}</p>
				</div>
				<div className="TierList">
					{Array.from(uniqueTiers).map((characterTier) => (
						<div
							key={characterTier}
							className="tier-row"
						>
							<div className="tier-name">{characterTier}</div>
							<div className="characters">
								{this.characters
									.filter(
										(character) => character.characterTier === characterTier
									)
									.map((character) => (
										<div
											className="characterCard"
											key={character.name}
										>
											{character.name}
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
