import "../styles/tierlist.css";

import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";

const Tierlist = () => {
	const { selectedGame } = useUiNavigationStore();

	return <>{selectedGame && selectedGame.renderTierlist()}</>;
};

export default Tierlist;
