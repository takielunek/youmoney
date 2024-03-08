import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../App";
import plus from "../../../assets/MainPage/other/plus.png";
import minus from "../../../assets/MainPage/other/minus.png";

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
        {accordionIsOpen ? (
          <img src={minus} alt="minus icon" className="h-[36px] w-[36px]" />
        ) : (
          <img src={plus} alt="plus icon" className="h-[36px] w-[36px]" />
        )}
        <p
          className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} text-[19px] md:text-[22px] medium text-start text-grey w-[90%]`}
        >
          {title}
        </p>
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
