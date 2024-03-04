import { AiFillCaretDown } from "react-icons/ai";
import { useState, useContext } from "react";
import { data } from "./index.js";
import { ThemeContext } from "./../../App";

const border =
  "relative border-1 rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
const label = "absolute px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
const questionMark =
  "rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 bottom-[50%] translate-y-1/2";
const speechBuble =
  "absolute w-[204px] text-[12px] text-center rounded-md py-[5px] px-[25px] right-[28px] translate-x-1/2 bottom-[45px]";
const icon = "absolute bottom-[33.3px] right-[28px] translate-x-1/2";

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, text, message, errors, register }) => {
  const { theme } = useContext(ThemeContext);

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div key={data.id} className="relative z-0">
      <div
        className={`${theme === "light" ? " bg-white" : " bg-darkModeBg"} ${label} z-10`}
      >
        <label
          className={`${theme === "light" ? "text-grayish " : "text-superLightGrey2 "} text-[14px]`}
        >
          {text}
        </label>
      </div>
      <input
        type="tel"
        placeholder={placeholder}
        {...register(text, { required: true })}
        className={`${theme === "light" ? "bg-transparent border-cream" : "bg-darkMode border-darkModeBorderColor"} ${border} input`}
        style={
          Object.hasOwn(errors,text) ? {
           border: "1px solid red",
            boxShadow: "none",
          } : {}
       
        }
      />
      {Object.hasOwn(errors, text) && (
        <span className="text-red text-[12px]">{message}</span>
      )}
      <div
        className={`${theme === "light" ? " bg-cream" : " bg-darkGrayish"} ${questionMark}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          Object.hasOwn(errors, text)
            ? {
                bottom: "65%",
              }
            : {}
        }
      >
        <p
          className={`${theme === "light" ? " text-grayish" : " text-superLightGrey2"} text-[12px]  grid place-content-center cursor-pointer`}
        >
          ?
        </p>
      </div>
      {isHovered && (
        <div>
          <div
            className={`${theme === "light" ? " text-white bg-grey" : " bg-superLightGrey2 text-grey"} ${speechBuble}`}
          >
            Zwróć uwagę, aby to był ten, <br /> który podawałaś/eś podczas{" "}
            <br />
            składaniu wniosku
          </div>
          <AiFillCaretDown
            className={`${theme === "light" ? " text-grey" : " text-superLightGrey2"} ${icon}`}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
