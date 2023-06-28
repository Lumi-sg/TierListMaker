import { useUiNavigationStore } from "../../../Stores/uiNavigationStore";

const Cardbank = () => {
	const { selectedGame } = useUiNavigationStore();
	return <>{selectedGame && selectedGame.renderCardBank()}</>;
};

export default Cardbank;
