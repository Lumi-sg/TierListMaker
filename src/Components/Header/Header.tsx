import "./header.css"
import logoImage from "../../assets/tiermaker-logo.png"
import searchIcon from "../../assets/magGlass.png"
import LOGIN from "./components/LOGIN";
function Header() {

  const handlePictureClick = () => {
    window.location.href = "http://127.0.0.1:5173/TierListMaker";
  }

    return (
      <header className="header">
        <div className="headerSubContainer">
        <div className="logo">
          <img className ="logoImage" src={logoImage} alt="logo" onClick={handlePictureClick}/>
        </div>
        <div className="search">
          <input type="text" placeholder="" />
          <button><img className="searchIcon" src={searchIcon} alt="search"/></button>
        </div>
        <div className="buttons">
          <button>Create Template</button>
          <button>Categories</button>
          <LOGIN/>
          </div>
        </div>
      </header>
    );
  }

export default Header