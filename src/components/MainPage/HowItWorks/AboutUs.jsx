import woman from "../../../assets/AboutUs/about.png";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import lightVector from "../../../assets/MainPage/bg/lightVector.png";
import darkVector from "../../../assets/MainPage/bg/darkVector.png";

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="text-center">
        <h1
          className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[30px] sm:text-[54px] bold`}
        >
          O nas
        </h1>
      </div>
      <div className="px-[30px] sm:flex relative">
        <div className="scale-x-[-1] sm:scale-x-[1] sm:w-[40%] z-10">
          <img
            src={woman}
            alt="Woman"
            className="h-[288px] sm:h-[376px] md:h-[470px] flex mx-auto"
          />
        </div>
        <div
          className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} z-10 text-[14px] sm:text-[17px] regular pt-[16px] sm:pt-[50px] sm:w-[60%]`}
        >
          <p className="w-full xss:w-[78%] mx-auto sm:m-[64px] md:m-[68px] ">
            <span className="bold">Youmoney.pl</span> to bezpłatna usługa
            online, która za darmo połączy Cię z pożyczkodawcami z całej Polski.
            Przedstawimy dla Ciebie najkorzystniejszą i najtańszą ofertę. Ty nie
            musisz nic robić, tylko wypłacić pieniądze od pożyczkodawcy.
          </p>
        </div>
        <img
          src={theme === "light" ? lightVector : darkVector}
          alt="blue vector"
          className="absolute z-0 -top-[140px] right-[0px] h-[700px] rotate-90"
        />
      </div>
    </div>
  );
};

export default AboutUs;
