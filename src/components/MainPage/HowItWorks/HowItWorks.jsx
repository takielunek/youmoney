import TextSection from "./TextSection"
import { itWorks } from "../../../index.js";


const HowItWorks = () => {
  return (
    <section className="wrapper">
    <TextSection />
    <div className="text-center">
          <h1 className="text-[54px] bold text-grey">Jak to działa?</h1>
         <p className="text-[20px] text-lightGrey light">Youmoney znajdzie najlepszą ofertę dla Ciebie.</p>
    </div>
    <div className="flex my-[51px]">
{itWorks.map((itWorks) => (
        <div key={itWorks.id} className="w-1/3">
              <div className="px-[15px] text-[17px] text-lightGrey">
                <div className="bg-lightBlue h-[46px] w-[46px] rounded-full grid mb-[30px]">
                  <p className="place-self-center text-blue regular">{itWorks.id}</p>
                </div>
                <p className="bold mb-[10px]">{itWorks.title}</p>
                <p className="mb-[30px] regular"> {itWorks.text}</p>
             <div className="grid place-content-center">
                  <img className="h-[180px]" src={itWorks.image} alt="Grafika" />       
                </div>     
             </div>
        </div>
 ))}
    </div>
    <div className="flex justify-around my-[85px]">
        <a href=""><button className="px-[45px] py-[20px] bg-blue text-white regular text-[18px] rounded-2xl hover:bg-darkGrey duration-300">Weź pożyczkę teraz!</button></a>
    </div>

    </section>
  )
}

export default HowItWorks