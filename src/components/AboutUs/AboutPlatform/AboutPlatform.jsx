import { aboutUs } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const AboutPlatform = () => {
   const { theme } = useContext(ThemeContext);

  return (
    <section className="pt-[48px] sm:pt-[90px] pb-[80px] sm:pb-[130px]">
      <div className="text-center">
        <h1 className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[24px] sm:text-[36px] bold mb-[50px] sm:mb-[80px]`}>
          Youmoney.pl zawsze będzie za darmo!
        </h1>
      </div>

      <div className="sm:flex">
        {aboutUs.map((aboutUs) => (
          <div
            key={aboutUs.id}
            className="w-[100%] xs:w-[83%] sm:w-1/3 mx-auto px-[30px]"
          >
            <div className="grid place-content-center mb-[35px]">
              <img className="h-[120px]" src={aboutUs.image} alt="Graphics" />
            </div>

            <p className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} ubuntu-bold text-[15px] sm:text-[16px] text-center mb-[32px] sm:mb-0`}>
              {aboutUs.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPlatform;
