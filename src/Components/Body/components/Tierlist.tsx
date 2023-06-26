import "../styles/tierlist.css";
import { sf6Tierlist } from "../../Tierlists/StreetFighter6";

const Tierlist = () => {
	return <>{sf6Tierlist.renderTierlist()}</>;
};

export default Tierlist;
