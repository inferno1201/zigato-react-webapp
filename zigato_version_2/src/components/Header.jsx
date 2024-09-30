
import logo from "../../assets/logo.png";
const Header = () => {
    return (
      <div className="header">
        <div className="logo_container">
          <img src={logo} id="logo_image"></img>
        </div>
        <div className="navbar">
          <ul className="nav_list">
            <li>Home</li>
            <li>About</li>
            <li>Info</li>
            <li>PinCode</li>
            <li>Summary</li>
            <li>Orders</li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;