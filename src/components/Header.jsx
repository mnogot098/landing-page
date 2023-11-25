import logo from "../assests/logo.png"
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" className="w-"/>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Prices</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;