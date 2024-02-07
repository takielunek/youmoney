import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import {stepOne} from "./index.js"
import Checkbox from "./Checkbox.jsx";

const Form = () => {
  const border =
    "relative border-2 border-cream rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
  const label =
    "absolute bg-white px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
  const questionMark =
    "bg-cream rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 bottom-[50%] translate-y-1/2";
  const speechBuble =
    "absolute w-[204px] text-[12px] text-white text-center bg-grey rounded-md pt-[4px] pb-[8px] px-[8px] right-[28px] translate-x-1/2 bottom-[45px]";
  const icon =
    "absolute bottom-[33.3px] right-[28px] translate-x-1/2 text-grey";

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-full sm:w-[600px] mx-auto">
      <div>
        <div className="shadow-xl rounded-xl mt-[36px] mb-[40px] sm:mb-[54px] py-[54px] px-[6%]">
          <div className="flex flex-col text-[18px] gap-[18px]">
            {stepOne.map((stepOne) => (
              <div key={stepOne.id} className="relative z-0">
                <div className={`${label} z-10`}>
                  <label className="text-grayish text-[14px]">
                    {stepOne.text}
                  </label>
                </div>
                <input
                  type="tel"
                  placeholder={stepOne.placeholder}
                  className={`${border}`}
                />
                <div
                  className={`${questionMark}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="text-[12px] text-grayish grid place-content-center">
                    ?
                  </p>
                </div>
                {isHovered && (
                  <div>
                    <div className={`${speechBuble}`}>{stepOne.speech}</div>
                    <AiFillCaretDown className={`${icon}`} />
                  </div>
                )}
              </div>
            ))}
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
