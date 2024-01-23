import Carousel from "./Carousel"
import SendFeedback from "./SendFeedback"

const Opinions = () => {

  return (
  <section className="wrapper pb-[51px]">
    <div className="sm:flex justify-between mt-[68px] ">
       <div className="w-11/12 sm:w-[60%] text-center sm:text-start px-[30px]">
           <h1 className="text-[30px] sm:text-[40px] md:text-[45px] bold text-grey my-[34px]">Poznaj opinie <br /> zadowolonych klientów </h1>
           <div>
            <Carousel />
           </div>
       </div>
       <SendFeedback />
    </div>
  </section>
  )
}

export default Opinions