import { benefits } from "./index.js";
import SwiperFreemode from "./SwiperFreeMode.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Benefits = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div className="mb-[54px]">
        <div className="py-[72px] wrapper ">
          <div className="text-center">
            <h1
              className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[30px] sm:text-[40px] md:text-[54px] bold`}
            >
              Główne korzyści youmoney.pl
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex my-[36px] regular">
              {benefits.map((benefits) => (
                <div
                  key={benefits.id}
                  className={`${theme === "light" ? "bg-transparent" : "bg-darkModeItemsBg"} w-1/4 my-[36px] mx-[18px] py-[45px] px-[30px] rounded-xl benefitsShadow`}
                >
                  <div className="grid place-content-center">
                    <img
                      className="h-[110px]"
                      src={benefits.image}
                      alt="Grafika"
                    />
                  </div>

                  <p
                    className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[16px] md:text-[16px] mt-[36px] text-center`}
                  >
                    {benefits.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <SwiperFreemode />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
