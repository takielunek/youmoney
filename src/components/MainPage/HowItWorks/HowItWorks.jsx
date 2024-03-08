import TextSection from "./TextSection";
import { itWorks } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import AboutUs from "./AboutUs.jsx";

const HowItWorks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="wrapper w-11/12 md:w-10/12 mx-auto">
      <TextSection />
      <div className="px-[30px]">
        <div className="text-center">
          <h1
            className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[30px] sm:text-[54px] bold`}
          >
            Jak to działa?
          </h1>
          <p
            className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[14px] sm:text-[20px] regular`}
          >
            Youmoney znajdzie najlepszą ofertę dla Ciebie.
          </p>
        </div>
        <div className="sm:flex my-[51px]">
          {itWorks.map((itWorks) => (
            <div
              key={itWorks.id}
              className="w-[100%] xs:w-[83%] sm:w-1/3 mx-auto"
            >
              <div className="sm:px-[15px] text-[17px] text-lightGrey">
                <div className="flex sm:flex-col mt-[60px] mb-[10px] sm:mt-0 sm:mb-0">
                  <img
                    className="h-[46px] w-[46px] mr-[20px] sm:mb-[30px] sm:mr-0"
                    src={
                      theme === "light"
                        ? itWorks.graphics
                        : itWorks.darkGraphics
                    }
                    alt="Graphics"
                  />
                  <p
                    className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} bold mb-[10px] mt-[10px] sm:mt-0`}
                  >
                    {itWorks.title}
                  </p>
                </div>
                <p
                  className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[14px] sm:text-[17px] mb-[30px] regular`}
                >
                  {" "}
                  {itWorks.text}
                </p>
                <div className="grid place-content-center">
                  <img
                    className="h-[180px]"
                    src={itWorks.image}
                    alt="Graphics"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-around my-[85px]">
        <a href="#header">
          <button className={`${theme === "light" ? "hover:bg-darkGrey" : "hover:bg-darkModeBlueButton"} px-[45px] py-[20px] bg-blue text-white medium text-[16px] sm:text-[18px] rounded-2xl duration-300`}>
            Weź pożyczkę teraz!
          </button>
        </a>
      </div>
      <AboutUs />
    </section>
  );
};

export default HowItWorks;
