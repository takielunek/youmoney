import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "./../../assets/MainPage/logo/lightLogo.svg";
import { useContext } from "react";
import { ThemeContext } from "./../../App";

const MessageNavbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${theme === "light" ? "bg-darkMode" : "bg-darkMode"} fixed w-full`}>
      <div className="grid place-content-center p-[16px]">
        <a href="/">
          <img
            src={theme === "light" ? darkLogo : lightLogo}
            alt="Logo"
            className="h-[38px] sm:h-[54px]"
          />
        </a>
      </div>
    </section>
  );
};

export default MessageNavbar;
