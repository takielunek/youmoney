import SendFeedback from "./SendFeedback"
import SwiperCarousel from "./SwiperCarousel.jsx";

const Opinions = () => {


  return (
  <section className="wrapper pb-[51px]">
    <div className="sm:flex justify-between mt-[68px] ">
       <div className="w-11/12 sm:w-[60%] px-[30px]">
           <h1 className="text-[30px] sm:text-[40px] md:text-[45px] bold text-grey my-[34px] text-center sm:text-start">Poznaj opinie <br /> zadowolonych klientów </h1>
            <div className="w-11/12 ss:w-2/3 sm:w-[78%] mx-auto sm:m-0">
              <SwiperCarousel />
            </div>
       </div>
       <SendFeedback />
    </div>
  </section>
  )
}

export default Opinions