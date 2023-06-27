import "./body.css";
import Tierlist from "./components/Tierlist";
import Cardbank from "./components/Cardbank";
import Templates from "./components/Templates";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";

const Body = () => {
	const { displayTemplates } = useUiNavigationStore();
	return (
		<div className="BodyContainer">
			<>
				<Templates />
				<Tierlist />
			</>
		</div>
	);
};

export default Body;
