import { TierlistArray } from "../../../Tierlists/TierlistArray";
import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";
import { Tierlist } from "../../../Classes/TierlistClass";

const Templates = () => {
	const { setSelectedGame, setDisplayTemplates } = useUiNavigationStore();

	const handleTemplateChoiceClick = (tierlist: Tierlist) => {
		setSelectedGame(tierlist);
		setDisplayTemplates(false);
	};

	return (
		<div className="TemplateContainer">
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
