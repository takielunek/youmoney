import TextSection from "./TextSection"
import { itWorks } from "../../../index.js";


const HowItWorks = () => {
  return (
    <section className="wrapper">
    <TextSection />
   <div className="px-[30px]">
     <div className="text-center">
          <h1 className="text-[30px] sm:text-[54px] bold text-grey">Jak to działa?</h1>
         <p className="text-[14px] sm:text-[20px] text-lightGrey regular">Youmoney znajdzie najlepszą ofertę dla Ciebie.</p>
    </div>
    <div className="sm:flex my-[51px]">
{itWorks.map((itWorks) => (
        <div key={itWorks.id} className="w-[100%] xs:w-[83%] sm:w-1/3 mx-auto">
              <div className="sm:px-[15px] text-[17px] text-lightGrey">
                <div className="flex sm:flex-col mt-[60px] mb-[10px] sm:mt-0 sm:mb-0">
                <img className="h-[46px] w-[46px] mr-[20px] sm:mb-[30px] sm:mr-0" src={itWorks.graphics} alt="Graphics" />
                <p className="bold mb-[10px] mt-[10px] sm:mt-0 ">{itWorks.title}</p>
                </div>
                <p className="text-[14px] sm:text-[17px] mb-[30px] regular"> {itWorks.text}</p>
             <div className="grid place-content-center">
                  <img className="h-[180px]" src={itWorks.image} alt="Graphics" />       
                </div>     
             </div>
        </div>
 ))}
    </div>
   </div>
    <div className="flex justify-around my-[85px]">
        <a href=""><button className="px-[45px] py-[20px] bg-blue text-white medium text-[16px] sm:text-[18px] rounded-2xl hover:bg-darkGrey duration-300">Weź pożyczkę teraz!</button></a>
    </div>

    </section>
  )
}

export default HowItWorks