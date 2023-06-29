import "../styles/Templates.css";
import { TierlistArray } from "../../../Tierlists/TierlistArray";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { Tierlist } from "../../../Classes/TierlistClass";

const Templates = () => {
	const {
		setSelectedGame,
		createMode,
		setDisplayPremades,
		setDisplayTemplates,
		setDisplayCreateTierlist,
	} = useUiNavigationStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		if (!createMode) {
			setDisplayTemplates(false);
			setSelectedGame(tierlist);
			setDisplayPremades(true);
		} else if (createMode) {
			setDisplayPremades(false);
			setDisplayTemplates(false);
			setDisplayCreateTierlist(true);
			setSelectedGame(tierlist);
			console.table(tierlist);
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
