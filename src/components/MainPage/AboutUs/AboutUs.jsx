import { about } from "../../../index.js";


const AboutUs = () => {
  return (
    <section className="py-[54px] wrapper">
        <div className="w-10/12 md:w-full mx-auto">
           <div className="text-center">
              <h1 className="text-[30px] sm:text-[40px] md:text-[54px] bold text-grey">Dlaczego youmoney.pl?</h1>
           </div>
           <div className="my-[36px] flex flex-wrap w-11/12 xs:w-9/12 mx-auto sm:w-full">
         {about.map((about) => (
            <div key={about.id} className="w-1/2 sm:w-1/4 px-[10px] py-[10px] sm:py-0 sm:px-[20px]">
                <p className="text-[25px] sm:text-[32px] md:text-[36px] text-blue extraBold">{about.title}</p>
                <p className="text-[15px] sm:text-[17px] text-lightGrey regular">{about.text}</p>
            </div>
          ))}
           </div>
        </div>
    </section>
  )
}

export default AboutUs