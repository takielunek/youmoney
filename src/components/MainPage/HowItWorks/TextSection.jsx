import check from "../../../assets/MainPage/other/check.png";
import { header } from "../../../index.js";

const TextSection = () => {
  return (
  <section>
     <div className="sm:flex justify-between mt-0 sm:mt-[40px] mb-[70px] text-lightGrey medium px-[30px] sm:px-0"> 
     {header.map((header) => (
        <div key={header.id} className="sm:w-1/3">
          <div className="flex mt-[10px] sm:mt-0 xss:w-10/12 ss:w-3/4  mx-auto">
            <img className="h-[24px] sm:h-[34px]" src={check} alt="Check icon" />
           <p className="text-[14px] sm:text-[18px] ml-[10px] mt-0 sm:mt-1">{header.text}</p>
          </div>
        </div>
    ))}
     </div>
    </section>
  )
}

export default TextSection