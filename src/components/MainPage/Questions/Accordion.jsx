import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, answer }) => {
  const { theme } = useContext(ThemeContext);

  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div className="border-b-[1px]">
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className="flex justify-between w-full py-[18px]"
      >
        <p
          className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} ${accordionIsOpen ? "text-[25px] md:text-[27px] bold" : "text-[19px] md:text-[22px] medium"} text-start text-grey w-[90%]`}
        >
          {title}
        </p>
        <FaChevronDown
          className={`${accordionIsOpen ? "rotateX" : "rotate"} text-[18px]mt-[7px]`}
        />
      </button>
      <div
        className={`${accordionIsOpen ? "grid-rows-[1fr] opacity-100 py-[18px]" : "grid-rows-[0fr] opacity-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div
          className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} text-[16px] md:text-[18px] overflow-hidden ubuntu-regular`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
