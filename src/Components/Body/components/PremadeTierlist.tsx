import "../styles/tierlist.css";

import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";

const PremadeTierlist = () => {
	const { selectedGame } = useUiNavigationStore();

	return <>{selectedGame && selectedGame.renderTierlist()}</>;
};

export default PremadeTierlist;
