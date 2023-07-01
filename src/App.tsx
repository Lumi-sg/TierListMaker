import "./App.css";
import "./reset.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import ".//Components/Body/styles/tierlist.css";

function App() {
	return (
		<div className="AppContainer">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
