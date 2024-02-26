import money from "../../../assets/MainPage/other/money.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const LoanButton = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div>
      <a href="/step1">
        <button
          id="toTopLink"
          className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} z-40 hidden fixed bottom-[16px] right-[80px] bg-blue duration-500 text-white ubuntu-medium text-[16px] px-[48px] py-[10px] border-2 border-white rounded-xl`}
        >
          Weź pożyczkę{" "}
          <div className="relative">
            <img
              className="absolute opacity-25 h-[45px] w-[51px] -bottom-[13px] -right-[50px]"
              src={money}
              alt="Bills"
            />
          </div>
        </button>
      </a>
    </div>
  );
};

export default LoanButton;
