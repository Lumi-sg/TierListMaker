import "./body.css";
import Tierlist from "./components/Tierlist";
import Cardbank from "./components/Cardbank";

const Body = () => {
	return (
		<div className="BodyContainer">
			<Cardbank />
			<Tierlist />
		</div>
	);
};

export default Body;
