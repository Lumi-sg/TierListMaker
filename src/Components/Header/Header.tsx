import "./header.css";
import logoImage from "../../assets/tiermaker-logo.png";
import searchIcon from "../../assets/magGlass.png";
import LOGIN from "./components/LOGIN";
import { useUiNavigationStore } from "../../Stores/uiNavigationStore";
import { useUserStore } from "../../Stores/userStore";

function Header() {
	const { setDisplayTemplates, setDisplayPremades, setCreateMode } = useUiNavigationStore();

	const { isLoggedIn } = useUserStore();

	const handlePictureClick = () => {
		window.location.href = "http://127.0.0.1:5173/TierListMaker";
	};

	const handlePremadesClick = () => {
		setCreateMode(false);
		setDisplayPremades(false);
		setDisplayTemplates(true);
	};

	const handleCreateClick = () => {
		setCreateMode(true);
		setDisplayPremades(false);
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
					<button onClick={handlePremadesClick}>Premades</button>
					<button onClick={handleCreateClick}>Create Tierlist</button>
					<button disabled={!isLoggedIn}>Your Tierlists</button>

					<LOGIN />
				</div>
			</div>
		</header>
	);
}

export default Header;
