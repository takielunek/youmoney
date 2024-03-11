import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import AntSwitch from "@mui/material/Switch";

const CookieAccordion = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const title = "text-[15px] text-cookieText medium";
  const icon = "h-[20px] w-[20px] text-cookieText";
  const text = "text-[12px] regular px-[10px]";
  const button = "flex justify-between w-full p-[10px]";

  return (
    <div className="grid gap-[10px] pb-[20px]">
      <div className=" bg-cookieAccordion">
        <button
          onClick={() => setAccordionIsOpen(!accordionIsOpen)}
          className={`${button}`}
        >
          <p className={`${title}`}>Funkcjonalne</p>
          <div className="flex gap-[10px]">
            <p className="text-[12px] text-cookieAccordionText medium">
              Zawsze aktywne
            </p>
            {accordionIsOpen ? (
              <IoChevronDown className={`${icon}`} />
            ) : (
              <IoChevronDown className={`${icon} rotate-180 duration-300`} />
            )}
          </div>
        </button>
        <div
          className={`${accordionIsOpen ? " opacity-100  py-[10px]" : "opacity-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`${text}`}>
            Przechowywanie lub dostęp do danych technicznych jest ściśle
            konieczny do uzasadnionego celu umożliwienia korzystania z
            konkretnej usługi wyraźnie żądanej przez subskrybenta lub
            użytkownika, lub wyłącznie w celu przeprowadzenia transmisji
            komunikatu przez sieć łączności elektronicznej.
          </div>
        </div>
      </div>
      {/* accordion-2  */}
      <div className=" bg-cookieAccordion">
        <button
          onClick={() => setAccordionIsOpen(!accordionIsOpen)}
          className={`${button}`}
        >
          <p className={`${title}`}>Statystyka</p>
          <div className="flex gap-[10px]">
            <AntSwitch defaultChecked />

            {accordionIsOpen ? (
              <IoChevronDown className={`${icon}`} />
            ) : (
              <IoChevronDown className={`${icon} rotate-180 duration-300`} />
            )}
          </div>
        </button>
        <div
          className={`${accordionIsOpen ? " opacity-100  py-[10px]" : " opacity-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`${text}`}>
            Przechowywanie techniczne lub dostęp, który jest używany wyłącznie
            do celów statystycznych.
          </div>
        </div>
      </div>
      {/* accordion-3  */}
      <div className=" bg-cookieAccordion">
        <button
          onClick={() => setAccordionIsOpen(!accordionIsOpen)}
          className={`${button}`}
        >
          <p className={`${title}`}>Marketing</p>
          <div className="flex gap-[10px]">
            <AntSwitch defaultChecked />

            {accordionIsOpen ? (
              <IoChevronDown className={`${icon}`} />
            ) : (
              <IoChevronDown className={`${icon} rotate-180 duration-300`} />
            )}
          </div>
        </button>
        <div
          className={`${accordionIsOpen ? "opacity-100  py-[10px]" : " opacity-0"} grid overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`${text}`}>
            Przechowywanie lub dostęp techniczny jest wymagany do tworzenia
            profili użytkowników w celu wysyłania reklam lub śledzenia
            użytkownika na stronie internetowej lub na kilku stronach
            internetowych w podobnych celach marketingowych.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieAccordion;
