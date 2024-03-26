import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "../../../assets/MainPage/logo/lightLogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  let { amount, period } = useParams();

  const spanText =
    "text-[20px] sm:text-[22px] md:text-[25px] text-blue mx-[10px] font-bold";

  return (
    <div className="wrapper">
      <div className="sm:flex justify-between py-[15px]">
        <a href="/">
          <img
            className="h-[54px]"
            src={theme === "light" ? darkLogo : lightLogo}
            alt="Logo"
          />
        </a>
        <div
          className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} xxs:flex text-[14px] sm:text-[16px] md:text-[18px] self-center mt-[15px] sm:mt-0`}
        >
          <p>
            Aplikujesz o <span className={`${spanText}`}>{amount} zł</span>
          </p>
          <p>
            na okres <span className={`${spanText}`}>{period} dni</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
