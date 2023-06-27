import "./header.css";
import logoImage from "../../assets/tiermaker-logo.png";
import searchIcon from "../../assets/magGlass.png";
import LOGIN from "./components/LOGIN";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";
function Header() {
	const { setDisplayTemplates } = useUiNavigationStore();

	const handlePictureClick = () => {
		window.location.href = "http://127.0.0.1:5173/TierListMaker";
	};

	const handleTemplateClick = () => {
		setDisplayTemplates(true);
	};

	return (
		<header className="header">
			<div className="headerSubContainer">
				<div className="logo">
					<img
						className="logoImage"
						src={logoImage}
						alt="logo"
						onClick={handlePictureClick}
					/>
				</div>
				<div className="search">
					<input
						type="text"
						placeholder=""
					/>
					<button>
						<img
							className="searchIcon"
							src={searchIcon}
							alt="search"
						/>
					</button>
				</div>
				<div className="buttons">
					<button onClick={handleTemplateClick}>Templates</button>
					<button>Your Tierlists</button>
					<LOGIN />
				</div>
			</div>
		</header>
	);
}

export default Header;
