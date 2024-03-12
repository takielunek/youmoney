import darkLogo from "./../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "./../../assets/MainPage/logo/lightLogo.svg";
import { ThemeContext } from "./../../App";
import { useEffect, useContext } from "react";

const MessageFooter = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.title = "Wniosek Youmoney";
  }, []);

  return (
    <div className="border-b-[8px] border-blue">
      <div className="py-[32px] sm:py-[54px]">
        <div className="grid place-content-center">
          <a href="/">
            <img
              src={theme === "light" ? darkLogo : lightLogo}
              alt="Logo"
              className="h-[54px]"
            />
          </a>
        </div>
        <div
          className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} mt-[48px] sm:mt-[54px] text-center text-[12px]`}
        >
          <p>&copy; {currentYear} - Youmoney.pl. Wszystkie Prawa Zastrzeżone</p>
        </div>
      </div>
    </div>
  );
};

export default MessageFooter;
