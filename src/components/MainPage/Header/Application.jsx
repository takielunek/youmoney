import bulb from "../../../assets/MainPage/other/bulb.svg";
import TermsOfTheLoan from "./TermsOfTheLoan";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import Slider from "@mui/material/Slider";

const Application = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full sm:w-[79%] sm:float-right">
      <div
        className={`${theme === "light" ? "bg-white" : "bg-transparent"} px-[30px] sm:px-[35px] py-[20px] sm:py-[25px] rounded-2xl`}
      >
        <div className="flex justify-between">
          <p
            className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[15px] sm:text-[18px] regular self-center`}
          >
            Ile chcesz pożyczyć?
          </p>
          <p className="text-blue text-[21px] sm:text-[30px] bold">2000 zł</p>
        </div>

        <Slider
          defaultValue={2000}
          aria-label="Default"
          valueLabelDisplay="off"
          min={100}
          max={10000}
          step={100}
        />

        <div className="flex justify-between text-superLightGrey text-[15px] light mb-[10px]">
          <p>100 zł</p>
          <p>10 000 zł</p>
        </div>
        <div className="flex justify-between">
          <p
            className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[15px] sm:text-[18px] regular self-center`}
          >
            Na ile czasu?
          </p>
          <p className="text-blue text-[21px] sm:text-[30px] bold">30 dni</p>
        </div>

        <Slider
          defaultValue={30}
          aria-label="Default"
          valueLabelDisplay="off"
          min={15}
          max={60}
          step={1}
        />

        <div className="flex justify-between text-superLightGrey text-[15px] light">
          <p>15 dni</p>
          <p>60 dni</p>
        </div>

        <div>
          <a href="/step1">
            <button
              className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} w-full mt-[36px] mb-[18px] text-white text-[16px] sm:text-[18px] regular bg-blue py-[13.5px] px-[18px] rounded-xl duration-300`}
            >
              Wnioskuj o pożyczkę
            </button>
          </a>
        </div>
        <div className="flex justify-around">
          <div className="flex gap-[10px]">
            <img className="h-[20px] w-[20px]" src={bulb} alt="Bulb icon" />
            <p className="text-superLightGrey text-[13px] regular">
              Bezpłatnie i bez zobowiązań!
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} xs:flex py-[15px] text-[12px] sm:text-[14px] z-10`}
      >
        <div className="flex w-full sm:w-[50%] justify-center">
          <p className="mr-2 regular">Kwota do spłaty:</p>
          <p className="bold">4800 zł</p>
        </div>
        <div className="flex w-full sm:w-[50%] justify-center">
          <p className="mr-2 regular">Data spłaty:</p>
          <p className="bold">18.02.2024</p>
        </div>
      </div>

      <TermsOfTheLoan />
    </div>
  );
};

export default Application;
