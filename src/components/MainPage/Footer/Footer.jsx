import lightLogo from "../../../assets/MainPage/logo/lightLogo.svg";
import privacy from "../../../assets/pdf/polityka_prywatnosci_findao.pdf";
import regulations from "../../../assets/pdf/regulamin_findao.pdf";
import { footer } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <section
      className={`${theme === "light" ? "bg-darkBlue" : "bg-darkMode"} pt-[96px] sm:pt-[108px] pb-[74px]`}
    >
      <div className="wrapper sm:flex w-11/12 md:w-10/12">
        <div className="w-11/12 ss:w-2/3 sm:w-1/4 flex flex-col relative mx-auto">
          <a href="/">
            <img className="h-[54px] absolute" src={lightLogo} alt="Logo" />
          </a>
          <div className="flex flex-col text-[14px] text-lightGrayish medium mt-[108px] gap-[8px]">
          
            <a className="hover:text-white" href="/contact">
              Kontakt
            </a>
            <a className="hover:text-white" href="/collaboration">
              Współpraca
            </a>
          </div>
        </div>
        <div className="w-11/12 ss:w-2/3 sm:w-1/4 flex flex-col medium pt-[30px] pb-[60px] sm:pb-0 mx-auto pr-[5px]">
          
          <p className="text-[16px] md:text-[18px] text-white">
            Obsługa klienta
          </p>
          <div className="flex flex-col mt-[18px] gap-[8px] text-[14px] text-lightGrayish">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              href={privacy}
            >
              Polityka Prywatności serwisu
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              href={regulations}
            >
              Regulamin serwisu
            </a>
            <a className="hover:text-white" href="/list">
              Lista partnerów współpracujących
            </a>
            <a className="hover:text-white" href="/data" target="_blank">
              Usuń swoje dane
            </a>
          </div>
        </div>
        <div className="w-11/12 ss:w-2/3 sm:w-1/2 flex flex-col gap-[10px] mx-auto">
          {footer.map((footer) => (
            <div key={footer.id}>
              <p className="text-grayish text-[12px] text-justify">
                {footer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[54px] text-grayish text-center text-[12px]">
        <p>&copy; {currentYear} youmoney.pl</p>
      </div>
    </section>
  );
};

export default Footer;
