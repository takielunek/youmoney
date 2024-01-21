import { benefits } from "../../../index.js";


const Benefits = () => {
  return (
    <section>
       <div className="mb-[54px]">
          <div className="py-[72px] wrapper ">
           <div className="text-center">
              <h1 className="text-[54px] bold text-grey">Główne korzyści youmoney.pl</h1>
           </div>
           <div className="flex my-[36px] regular">
         {benefits.map((benefits) => (
            <div key={benefits.id} className="w-1/4 my-[36px] mx-[18px] py-[45px] px-[30px] border-2 border-white rounded-xl bottomShadow">
                <img className="h-[186.5px]" src={benefits.image} alt="Grafika" />
                <p className="text-[17px] text-lightGrey mt-[36px] text-center">{benefits.title}</p>
            </div>
          ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits