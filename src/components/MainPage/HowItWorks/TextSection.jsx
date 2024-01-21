import check from "../../../assets/other/check.png"
import { header } from "../../../index.js";

const TextSection = () => {
  return (
  <section>
     <div className="flex justify-between mt-[40px] mb-[70px] text-lightGrey medium "> 
    {header.map((header) => (
        <div key={header.id} className="w-1/3 flex justify-around">
          <div className="flex w-10/12">
            <img className="h-[34px]" src={check} alt="" />
           <p className="text-[18px] ml-[15px] mt-1">{header.text}</p>
          </div>
        </div>
    ))}
     </div>
    </section>
  )
}

export default TextSection