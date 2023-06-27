import "./body.css";
import Tierlist from "./components/Tierlist";
import Cardbank from "./components/Cardbank";
import Templates from "./components/Templates";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";
import { useEffect } from "react";

const Body = () => {
	const { displayTemplates, displayCardbank } = useUiNavigationStore();

	return (
		<div className="BodyContainer">
			<>
				{displayTemplates && !displayCardbank && <Templates />}
				{!displayTemplates && displayCardbank && <Cardbank />}
				<Tierlist />
			</>
		</div>
	);
};

export default Body;
