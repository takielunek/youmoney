
import { AiFillCaretDown } from "react-icons/ai";
import { stepOne } from "./index.js";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { ThemeContext } from "./../../App";



// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, text, message }) => {
  const { theme } = useContext(ThemeContext);
  const border =
    "relative border-2 rounded-2xl px-[18px] py-[13.5px] focus outline-none w-full focus:border-blue focus:ring-2 focus:ring-sky";
  const label = "absolute px-[7px] left-[15px] -translate-y-1/2 rounded-xl";
  const questionMark =
    " rounded-full h-[20px] w-[20px] hidden sm:block absolute right-[28px] translate-x-1/2 bottom-[50%] translate-y-1/2";
  const speechBuble =
    "absolute w-[204px] text-[12px] text-center rounded-md pt-[4px] pb-[8px] px-[8px] right-[28px] translate-x-1/2 bottom-[45px]";
  const icon = "absolute bottom-[33.3px] right-[28px] translate-x-1/2 ";

  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div key={stepOne.id} className="relative z-0">
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
        className={`${theme === "light" ? "bg-transparent border-cream" : "bg-darkMode border-darkModeBorderColor"} ${border} input`}
        {...register("data", { required: true })}
        style={
          errors.data && {
            border: "1px solid red",
            boxShadow: "none",
          }
        }
      />
      {errors.data && <span className="text-red text-[12px]">{message}</span>}
      <div
        className={`${theme === "light" ? " bg-cream" : " bg-darkGrayish"} ${questionMark}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          errors.data && {
            bottom: "65%",
          }
        }
      >
        <p
          className={`${theme === "light" ? " text-grayish" : " text-superLightGrey2"} text-[12px] grid place-content-center cursor-pointer`}
        >
          ?
        </p>
      </div>
      {isHovered && (
        <div>
          <div
            className={`${theme === "light" ? " text-white bg-grey" : " bg-superLightGrey2 text-grey"} ${speechBuble}`}
          >
            {stepOne.speech}
          </div>
          <AiFillCaretDown
            className={`${theme === "light" ? " text-grey" : " text-superLightGrey2"} ${icon}`}
          />
        </div>
      )}
    </div>
  );
};

export default Input