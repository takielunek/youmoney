
import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "../../../assets/MainPage/logo/lightLogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Logo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <a href="/">
        <img
          className="h-[54px]"
          src={theme === "light" ? darkLogo : lightLogo}
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default Logo;
