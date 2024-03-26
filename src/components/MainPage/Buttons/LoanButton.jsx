import money from "../../../assets/MainPage/other/money.svg";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import { Link } from "react-router-dom";

const LoanButton = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className="flex sm:justify-around">
      <Link to="/step1/2000/30">
        <button
          id="toTopLink"
          className={`${theme === "light" ? "hover:bg-darkBlue" : "hover:bg-blue"} w-full sm:w-[260px] z-40 hidden fixed bottom-0 sm:-translate-x-1/2 bg-blue duration-500 text-white ubuntu-medium text-[18px] py-[16.2px] rounded-t-xl`}
        >
          Weź pożyczkę{" "}
          <div className="relative">
            <img
              className="absolute opacity-25 sm:h-[60px] w-[157px] sm:w-[65px] -top-[40px] sm:-bottom-[18px] right-0"
              src={money}
              alt="Bills"
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LoanButton;
