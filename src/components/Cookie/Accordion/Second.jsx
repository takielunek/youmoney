import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import AntSwitch from "@mui/material/Switch";

const Second = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const title = "text-[15px] text-cookieText medium";
  const icon = "h-[25px] w-[25px] text-cookieText";
  const text = "text-[12px] regular px-[10px]";
  const button = "flex justify-between w-full p-[10px] ";

  return (
    <div className=" bg-cookieAccordion relative">
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`${button}`}
      >
        <p className={`${title}`}>Statystyka</p>

        {accordionIsOpen ? (
          <IoChevronDown className={`${icon}`} />
        ) : (
          <IoChevronDown className={`${icon} rotate-180 duration-300`} />
        )}
      </button>

      <div
        className={`${accordionIsOpen ? " opacity-100 pt-[20px] pb-[10px]" : " opacity-0 h-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className={`${text}`}>
          Przechowywanie techniczne lub dostęp, który jest używany wyłącznie do
          celów statystycznych.
        </div>
      </div>

      <button
        className={`${isChecked ? "bg-orange ring-[2px] ring-blue" : "bg-blue hover:ring-[2px] ring-blue duration-300"} h-[20px] w-[40px] rounded-full absolute top-[12px] right-[45px] `}
      >
        <AntSwitch defaultChecked onClick={() => setIsChecked(!isChecked)} />
      </button>
    </div>
  );
};

export default Second;
