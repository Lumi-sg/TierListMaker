import "./header.css"
import logoImage from "../../assets/tiermaker-logo.png"
function Header() {
    return (
      <header className="header">
        <div className="headerSubContainer">
        <div className="logo">
          <img className ="logoImage" src={logoImage} alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="buttons">
          <button>Create Template</button>
          <button>Categories</button>
          <button>Login</button>
          </div>
        </div>
      </header>
    );
  }

export default Header