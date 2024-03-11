import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { opinions } from "./index.js";
import "swiper/css";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const CarouselDefault = () => {
  const { theme } = useContext(ThemeContext);
  const button =
    "text-[20px] mb-30 cursor-pointer border-2 rounded-full hover:border-4 duration-200";
  const icon = "h-[12px] w-[12px] m-2";

  return (
    <section className="pt-[20px] md:pt-[50px] px-[63px] mb-[30px] sm:mb-0 relative">
      <div className="absolute flex inset-0 items-center justify-between">
        <div
          className={`${theme === "light" ? "border-silver" : "border-darkModeItemsBg"} ${button} swiper-button-prev`}
        >
          <FaChevronLeft
            className={`${theme === "light" ? "text-lightGrayish" : "text-darkModeItemsBg"} ${icon} `}
          />
        </div>
        <div
          className={`${theme === "light" ? "border-silver" : "border-darkModeItemsBg"} ${button} swiper-button-next`}
        >
          <FaChevronRight
            className={`${theme === "light" ? "text-lightGrayish" : "text-darkModeItemsBg"} ${icon}`}
          />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {opinions.map((opinions) => (
          <SwiperSlide key={opinions.id}>
            <div>
              <p
                className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} regular mb-[20px] text-[16px] md:text-[19px] text-start`}
              >
                {opinions.text}
              </p>
              <p
                className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} medium text-[16px] md:text-[17px] text-start`}
              >
                {opinions.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselDefault;
