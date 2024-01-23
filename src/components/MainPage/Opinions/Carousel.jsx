import { useState } from "react";
import carretLeft from "../../../assets/other/carret-left.svg"
import carretRight from "../../../assets/other/carret-right.svg"


const Carousel = ({children: opinions}) => {
  const button = "border-2 border-cream rounded-full h-[32px] w-[32px]"


  const [curr, setCurr] = useState(0)
  const prev = () =>
    setCurr((curr) => (curr === 0 ? opinions.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === opinions.length - 1 ? 0 : curr + 1))

  return (
  <div className="py-[50px] px-[20px]">
      <div className="overflow-hidden relative">
     <div className="transition-transform ease-out duration-500 w-[60%] ml-[60px]"  style={{ transform: `translateX(-${curr * 100}%)` }}>{opinions}</div>
     <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev} className={`${button}`}>
            <img src={carretLeft} alt="" />
        </button>
        <button onClick={next} className={`${button}`}>
           <img src={carretRight} alt="" />
        </button>
     </div>
    </div>
  </div> 
  )
}

export default Carousel