import ".//Components/Body/styles/tierlist.css";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./reset.css";

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
