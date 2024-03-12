import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import AntSwitch from "@mui/material/Switch";

const Third = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const title = "text-[15px] text-cookieText medium";
  const icon = "h-[25px] w-[25px] text-cookieText";
  const text = "text-[12px] regular px-[10px]";
  const button = "flex justify-between w-full p-[10px]";

  return (
    <div className=" bg-cookieAccordion relative">
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`${button}`}
      >
        <p className={`${title}`}>Marketing</p>

        {accordionIsOpen ? (
          <IoChevronDown className={`${icon}`} />
        ) : (
          <IoChevronDown className={`${icon} rotate-180 duration-300`} />
        )}
      </button>
      <div
        className={`${accordionIsOpen ? "opacity-100 pt-[20px] pb-[10px]" : " opacity-0 h-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className={`${text}`}>
          Przechowywanie lub dostęp techniczny jest wymagany do tworzenia
          profili użytkowników w celu wysyłania reklam lub śledzenia użytkownika
          na stronie internetowej lub na kilku stronach internetowych w
          podobnych celach marketingowych.
        </div>
      </div>
      <div
        className={`${isChecked ? "bg-orange" : "bg-blue"} h-[20px] w-[40px] rounded-full absolute top-[12px] right-[45px]`}
      >
        <AntSwitch defaultChecked onClick={() => setIsChecked(!isChecked)} />
      </div>
    </div>
  );
};

export default Third;
