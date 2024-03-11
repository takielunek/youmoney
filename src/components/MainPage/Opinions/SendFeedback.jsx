import { useContext } from "react";
import { ThemeContext } from "../../../App";
import lightVector from "../../../assets/MainPage/bg/lightVector.png";
import darkVector from "../../../assets/MainPage/bg/darkVector.png";


const SendFeedback = () => {
  const { theme } = useContext(ThemeContext);

  const placeholder =
    "border-[1px] border-cream rounded-2xl text-cream light px-[17px] py-[13px] ";

  return (
    <div className="flex justify-center px-[10px] xs:px-[30px] sm:px-0 sm:w-[40%] relative">
      <div className="z-10 w-11/12 ss:w-2/3 sm:w-11/12 flex flex-col border-2 border-white bg-white rounded-xl mb-[25.5px] py-[45px] px-[30px] bgShadow">
        <p
          className={`${theme === "light" ? "text-grey" : "text-darkModeText2"} text-[20px] sm:text-[22px] md:text-[23.4px] bold mb-[17px] `}
        >
          Zostaw swoją opinię
        </p>
        <input
          className={`${placeholder} mb-[15px] input`}
          type="text"
          placeholder="Podaj swoje imię i nazwisko"
        />
        <textarea
          className={`${placeholder} input`}
          placeholder="Podaj swój komentarz..."
          rows="4"
        ></textarea>
        <div>
          <button
            className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} w-full py-[12px] mt-[24px] bg-blue text-white medium text-[16px] md:text-[17px] rounded-2xl duration-300`}
          >
            Wyślij swoją opinie
          </button>
        </div>
      </div>
      <img
        src={theme === "light" ? lightVector : darkVector}
        alt="blue vector"
        className="absolute z-0 -top-[180px] -right-[250px] h-[700px] rotate-180"
      />
    </div>
  );
};

export default SendFeedback;
