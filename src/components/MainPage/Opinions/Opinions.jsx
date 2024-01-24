import { opinions } from "../../../index.js";
import Carousel from "./Carousel"
import SendFeedback from "./SendFeedback"


const Opinions = () => {


  return (
  <section className="wrapper pb-[51px]">
    <div className="sm:flex justify-between mt-[68px] ">
       <div className="w-11/12 sm:w-[60%] sm:text-start px-[30px]">
           <h1 className="text-[30px] sm:text-[40px] md:text-[45px] bold text-grey my-[34px] text-center">Poznaj opinie <br /> zadowolonych klientów </h1>
            <Carousel>
              {opinions.map((opinions) => (
                     <div key={opinions.id} className="mx-[26px]">
                         <p className="regular text-[19px] mb-[20px] w-[378px] text-wrap">{opinions.text}</p>
                         <p className="medium text-[17px] text-start">{opinions.name}</p>
                     </div>
                ))}
            </Carousel>
       </div>
       <SendFeedback />
    </div>
  </section>
  )
}

export default Opinions