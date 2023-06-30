import "../styles/Templates.css";
import { TierlistArray } from "../../../Tierlists/TierlistArray";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { useTierListStore } from "../../../Stores/tierListStore";
import { Tierlist } from "../../../Classes/TierlistClass";

const Templates = () => {
	const {
		setSelectedGame,
		createMode,
		setDisplayPremades,
		setDisplayTemplates,
		setDisplayCreateTierlist,
	} = useUiNavigationStore();

	const { setCurrentTierlist } = useTierListStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		if (!createMode) {
			setDisplayTemplates(false);
			setSelectedGame(tierlist);
			setCurrentTierlist(tierlist);
			setDisplayPremades(true);
			setDisplayCreateTierlist(false);
		} else if (createMode) {
			setDisplayPremades(false);
			setDisplayTemplates(false);
			setDisplayCreateTierlist(true);
			setSelectedGame(tierlist);
		}
	};

	return (
		<div className="TemplateContainer">
			<div className="templateTopTextContainer">
				<h1 className="templateTopText">
					{" "}
					{createMode ? "Create a Tierlist" : "Choose a premade tierlist"}
				</h1>
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
