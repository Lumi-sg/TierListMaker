import "../styles/tierlist.css";
import { dummyTierlist } from "../../Tierlists/StreetFighter6";

const Tierlist = () => {
	return <>{dummyTierlist.renderTierlist()}</>;
};

export default Tierlist;
