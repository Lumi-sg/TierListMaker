import "./body.css";
import PremadeTierlist from "./components/PremadeTierlist";

import Templates from "./components/Templates";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";

const Body = () => {
	const { displayTemplates, displayPremades } = useUiNavigationStore();

	return (
		<div className="BodyContainer">
			<>{displayTemplates && <Templates />}</>
			<>{displayPremades && <PremadeTierlist />}</>
		</div>
	);
};

export default Body;
