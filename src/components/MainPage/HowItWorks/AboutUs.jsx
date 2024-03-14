import woman from "../../../assets/AboutUs/about.png";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import lightVector from "../../../assets/MainPage/bg/lightVector.png";
import darkVector from "../../../assets/MainPage/bg/darkVector.png";

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative">
      <div className="text-center">
        <h1
          className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[30px] sm:text-[54px] bold`}
        >
          O nas
        </h1>
      </div>

      <div className="px-[30px] relative z-10 flex">
        <div className="grid place-items-end w-[30%] sm:w-[40%]">
          <img
            src={woman}
            alt="Woman"
            className="h-[288px] sm:h-[245px] xmd:h-[380px] md:h-[470px] mt-[30px] xmd:mt-0 hidden sm:block"
          />
          <img
            src={woman}
            alt="Woman"
            className="absolute top-[40px] xxs:top-0 h-[200px] block sm:hidden"
          />
        </div>
        <div
          className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} z-10 text-[14px] sm:text-[17px] regular pt-[16px] sm:pt-[50px] w-[70%] sm:w-[60%]`}
        >
          <p className="m-0 sm:m-[16px] xmd:m-[64px] md:m-[68px] ">
            <span className="bold">Youmoney.pl</span> to bezpłatna usługa
            online, która za darmo połączy Cię z pożyczkodawcami z całej Polski.
            Przedstawimy dla Ciebie najkorzystniejszą i najtańszą ofertę. Ty nie
            musisz nic robić, tylko wypłacić pieniądze od pożyczkodawcy.
          </p>
        </div>
      </div>

      <img
        src={theme === "light" ? lightVector : darkVector}
        alt="blue vector"
        className="absolute z-0 top-[50px] sm:top-[100px] xmd:-top-[50px] right-[100px] xs:right-[300px] sm:right-[200px] xmd:right-[0px] h-[250px] sm:h-[400px] xmd:h-[700px] rotate-90"
      />
    </div>
  );
};

export default AboutUs;
