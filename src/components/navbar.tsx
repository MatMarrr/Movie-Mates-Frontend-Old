import { Link } from "react-router-dom";
import { isLoggedState } from "../RecoilStates";
import { useRecoilValue } from "recoil";
import { ThemeSwitch } from "./themeSwitch";

export const Navbar = () => {
  const isLoggedIn = useRecoilValue(isLoggedState);

  if (!isLoggedIn) {
    return (
      <div className="linkContainer">
        <ThemeSwitch />
        <Link className="headerLink" to="/register">
          Register
        </Link>
        <Link className="headerLink" to="/login">
          Login
        </Link>
      </div>
    );
  }
};
