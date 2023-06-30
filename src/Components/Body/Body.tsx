import "./body.css";
import PremadeTierlist from "./components/PremadeTierlist";
import UserCreateTierlist from "./components/UserCreateTierlist";
import Templates from "./components/Templates";
import YourTierlists from "./components/YourTierlists";
import WelcomePage from "./components/WelcomePage";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";
import { useUserStore } from "../../Stores/userStore";

const Body = () => {
	const { displayTemplates, displayPremades, displayCreateTierlist, displayYourTierlists } =
		useUiNavigationStore();

	const { isLoggedIn } = useUserStore();
	return (
		<div className="BodyContainer">
			{displayTemplates && <Templates />}
			{displayPremades && !displayCreateTierlist && <PremadeTierlist />}
			{isLoggedIn && (
				<>
					{displayCreateTierlist && !displayTemplates && <UserCreateTierlist />}
					{displayYourTierlists && !displayCreateTierlist && <YourTierlists />}
				</>
			)}
			{!isLoggedIn && !displayTemplates && !displayPremades && <WelcomePage />}
		</div>
	);
};

export default Body;
