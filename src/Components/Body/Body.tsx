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
			<>{displayPremades && <PremadeTierlist />}</>
			<>{displayCreateTierlist && <UserCreateTierlist />}</>
		</div>
	);
};

export default Body;
