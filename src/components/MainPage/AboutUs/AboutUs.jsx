import { about } from "../../../index.js";


const AboutUs = () => {
  return (
    <section>
        <div className="py-[54px] wrapper">
           <div className="text-center">
              <h1 className="text-[54px] bold text-grey">Dlaczego youmoney.pl?</h1>
           </div>
           <div className="my-[36px] flex">
         {about.map((about) => (
            <div key={about.id} className="w-1/4 px-[20px]">
                <p className="text-[36px] text-blue extraBold">{about.title}</p>
                <p className="text-[17px] text-lightGrey regular">{about.text}</p>
            </div>
          ))}
           </div>
        </div>
    </section>
  )
}

export default AboutUs