import { benefits } from "../../../index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useWindowSize } from "../../../hooks.js";


const SwiperFreeMode = () => {
const { width } = useWindowSize();
const isDestkop = width >= 768;

  return (

<div>
    {isDestkop ? (
    <Swiper
        slidesPerView={3}
        freeMode={true}
        modules={[FreeMode]}
      >
        {benefits.map((benefits) => (
            <SwiperSlide key={benefits.id}>
            <div key={benefits.id} className="my-[36px] mx-[18px] py-[45px] px-[30px] border-2 border-white rounded-xl bottomShadow">
                <img className="h-[186.5px]" src={benefits.image} alt="Grafika" />
                <p className="text-[16px] md:text-[16px] text-lightGrey mt-[36px] text-center">{benefits.title}</p>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
      ) : (
        <Swiper
        slidesPerView={1}
        freeMode={true}
        modules={[FreeMode]}
      >
        {benefits.map((benefits) => (
            <SwiperSlide key={benefits.id}>
            <div key={benefits.id} className="my-[36px] mx-[18px] py-[45px] px-[30px] border-2 border-white rounded-xl bottomShadow">
                <img className="h-[186.5px]" src={benefits.image} alt="Grafika" />
                <p className="text-[16px] md:text-[16px] text-lightGrey mt-[36px] text-center">{benefits.title}</p>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
      )}
</div>

  );
}

export default SwiperFreeMode
