
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom"
const Header = () => {
    return (
      <div className="header">
        <div className="logo_container">
        <a href="/" ><img src={logo} id="logo_image"></img></a>
        </div>
        <div className="navbar">
          <ul className="nav_list">
            <li><Link to="/">Home</Link></li>
            <li><a href="/about">About</a></li>
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