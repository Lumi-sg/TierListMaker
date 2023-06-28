import "../styles/Templates.css";
import { TierlistArray } from "../../../Tierlists/TierlistArray";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { Tierlist } from "../../../Classes/TierlistClass";

const Templates = () => {
	const { setSelectedGame, createMode, setDisplayPremades, setDisplayTemplates } =
		useUiNavigationStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		if (!createMode) {
			setDisplayTemplates(false);
			setSelectedGame(tierlist);
			setDisplayPremades(true);
		}
	};

	return (
		<div className="PremadeLists">
			{TierlistArray.map((tierlist) => (
				<img
					src={tierlist.logoImageURL}
					className="TemplateLogo"
					onClick={() => handleTemplateChoiceClick(tierlist)}
					key={tierlist.name}
				></img>
			))}
		</div>
	);
};

export default Templates;
