import { useState } from "react";
import carretLeft from "../../../assets/other/carret-left.svg"
import carretRight from "../../../assets/other/carret-right.svg"


const Carousel = ({children: opinions}) => {
  const button = "border-2 border-blue rounded-full h-[32px] w-[32px]"
  const iconLeft = " h-[20px] ml-[4px]"
  const iconRight = " h-[20px] ml-[6px] "

  const [curr, setCurr] = useState(0)
  const prev = () =>
    setCurr((curr) => (curr === 0 ? opinions.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === opinions.length - 1 ? 0 : curr + 1))

  return (
  <div className="py-[50px] w-[80%] ml-[20px]">
           <div className="flex">
            <div>
                <button onClick={prev} className={`${button}`}>
               <img className={`${iconLeft}`} src={carretLeft} alt="Icon" />
            </button>
            </div>
           <div className="overflow-hidden ">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{opinions}</div>
           </div>
           <div>
            <button onClick={next} className={`${button}`}>
                <img className={`${iconRight}`} src={carretRight} alt="Icon" />
            </button>
           </div>
           </div>
  </div> 
  )
}

export default Carousel