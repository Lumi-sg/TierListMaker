import { Tierlist } from "../../../Classes/TierlistClass";
import { useTierListStore } from "../../../Stores/tierListStore";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { TierlistArray } from "../../../Tierlists/TierlistArray";
import "../styles/Templates.css";

const Templates = () => {
	const { setSelectedGame, createMode, setDisplayPremades, setDisplayTemplates, setDisplayCreateTierlist } =
		useUiNavigationStore();

	const { setCurrentTierlist } = useTierListStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		if (!createMode) {
			setSelectedGame(tierlist);
			setCurrentTierlist(tierlist);
			setDisplayPremades(true);
			setDisplayCreateTierlist(false);
		} else if (createMode) {
			setDisplayTemplates(false);
			setDisplayCreateTierlist(true);
			setSelectedGame(tierlist);
		}
	};

	return (
		<div className="TemplateContainer">
			<div className="templateTopTextContainer">
				<h1 className="templateTopText">Choose a game to create a tierlist with</h1>
			</div>
			<div className="PremadeLists">
				{TierlistArray.map((tierlist) => (
					<img
						src={tierlist.logoImageURL}
						className="TemplateLogo"
						onClick={() => handleTemplateChoiceClick(tierlist)}
						key={tierlist.game}
					></img>
				))}
			</div>
		</div>
	);
};

export default Templates;
