import { benefits } from "./index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useWindowSize } from "./hooks.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const SwiperFreeMode = () => {
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isDestkop = width >= 768;

  return (
    <div>
      {isDestkop ? (
        <Swiper
          slidesPerView={3}
          freeMode={true}
          modules={[FreeMode]}
          className="overflow-visible"
        >
          {benefits.map((benefits) => (
            <SwiperSlide key={benefits.id}>
              <div
                key={benefits.id}
                className={`${theme === "light" ? "bg-transparent" : "bg-darkModeItemsBg"} my-[36px] mx-[18px] py-[45px] px-[30px] rounded-xl benefitsShadow`}
              >
                <div className="flex justify-around">
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
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          freeMode={true}
          modules={[FreeMode]}
          className="w-[65%] xsm:w-[50%] overflow-visible"
        >
          {benefits.map((benefits) => (
            <SwiperSlide key={benefits.id}>
              <div
                key={benefits.id}
                className={`${theme === "light" ? "bg-transparent" : "bg-darkModeItemsBg"} my-[36px] mx-[18px] py-[45px] px-[30px] rounded-xl benefitsShadow`}
              >
                <div className="flex justify-around">
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SwiperFreeMode;
