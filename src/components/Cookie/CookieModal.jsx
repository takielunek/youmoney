import cookieClose from "../../assets/MainPage/other/cookieClose.svg";
import privacy from "../../assets/pdf/polityka_prywatnosci_findao.pdf";
import { useState } from "react";
import CookieAccordion from "./Accordion/CookieAccordion";

// eslint-disable-next-line react/prop-types
const CookieModal = ({ open, onClose }) => {
  if (!open) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const button = "w-full sm:w-[125px] py-[10px] rounded-md ";
  const buttonColors = "bg-cookieButton text-cookieText ";

  return (
    <div>
      <div className="absolute z-50 left-[10px] ">
        <div className="fixed bottom-[10px] bg-white py-[15px] px-[20px] w-full sm:w-[435px] rounded-xl buttonShadow">
          <div className="relative">
            <p className="text-[15px] text-cookieText medium mt-[4px] hidden xxs:block absolute top-0 left-0">
              Zarządzaj zgodami plików cookie
            </p>

            <button
              className="bg-blue hover:bg-darkGrey duration-300 rounded-full h-[30px] w-[30px] absolute top-0 right-0"
              onClick={onClose}
            >
              <img
                className="h-[12px] w-[12px] cursor-pointer ml-[9px] m-[5px]"
                src={cookieClose}
                alt="Close icon"
              />
            </button>
          </div>
          <p className="text-[12px] mt-[40px] mb-[15px] ubuntu-regular text-cookieText">
            Aby zapewnić jak najlepsze wrażenia, korzystamy z technologii,
            takich jak pliki cookie, do przechowywania i/lub uzyskiwania dostępu
            do informacji o urządzeniu. Zgoda na te technologie pozwoli nam
            przetwarzać dane, takie jak zachowanie podczas przeglądania lub
            unikalne identyfikatory na tej stronie. Brak wyrażenia zgody lub
            wycofanie zgody może niekorzystnie wpłynąć na niektóre cechy i
            funkcje.
          </p>
          {isVisible && <CookieAccordion />}
          <div className="flex flex-col sm:flex-row justify-between text-[12px] ubuntu-medium gap-[10px] sm:gap-0">
            <button
              className={`${button} bg-blue text-white`}
              onClick={onClose}
            >
              Akceptuję
            </button>
            <button className={`${button} ${buttonColors}`} onClick={onClose}>
              Odmów
            </button>
            {isVisible ? (
              <button className={`${button} ${buttonColors}`} onClick={onClose}>
                Zapisz preferencje
              </button>
            ) : (
              <button
                className={`${button} ${buttonColors}`}
                onClick={toggleVisibility}
              >
                Zobacz preferencje
              </button>
            )}
          </div>
          <div className="text-center">
            <a href={privacy}>
              <button className="text-[12px] text-blue underline mt-[5px] medium">
                Oświadczenie o prywatności
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
