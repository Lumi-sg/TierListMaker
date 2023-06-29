import "./body.css";
import PremadeTierlist from "./components/PremadeTierlist";
import UserCreateTierlist from "./components/UserCreateTierlist";
import Templates from "./components/Templates";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";

const Body = () => {
	const { displayTemplates, displayPremades, displayCreateTierlist } = useUiNavigationStore();

	return (
		<div className="BodyContainer">
			<>{displayTemplates && <Templates />}</>
			<>{displayPremades && !displayCreateTierlist && <PremadeTierlist />}</>
			<>{displayCreateTierlist && !displayTemplates && <UserCreateTierlist />}</>
		</div>
	);
};

export default Body;
