import {useState} from "react"
import { FaChevronDown } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Accordion = ({title, answer}) => {

  const [accordionIsOpen, setAccordionIsOpen] = useState(false)

  return (
       <div className="border-b-[1px]">
         <button onClick={() => setAccordionIsOpen(!accordionIsOpen)} className="flex justify-between w-full py-[18px]">
            <p className={`${accordionIsOpen ? "text-[25px] md:text-[27px] bold" : "text-[19px] md:text-[22px] medium" } text-start text-grey w-[90%]`}>{title}</p>
            <FaChevronDown className={`${accordionIsOpen ? "rotateX" : "rotate" } text-[18px] text-grayish mt-[7px]`} />
         </button>
         <div className={`${accordionIsOpen ? "grid-rows-[1fr] opacity-100 py-[18px]" : "grid-rows-[0fr] opacity-0" } grid overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="text-[16px] md:text-[18px] overflow-hidden ubuntu-regular text-grayish">{answer}</div>
         </div>
       </div>
  )
}

export default Accordion;

