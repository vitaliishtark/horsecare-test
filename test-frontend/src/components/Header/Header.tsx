import "./Header.scss";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Header;
