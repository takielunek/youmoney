import { useContext } from "react";
import { ThemeContext } from "./../../App";

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);

  const text = "text-[24px] text-grayish ubuntu-regular";

  return (
    <section className="mb-[250px]">
      <div>
        <h1
          className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[40px] sm:text-[50px] bold mt-[20px] sm:mt-[50px] mb-[100px] sm:my-[100px]`}
        >
          Kontakt
        </h1>

        <div className="bg-red text-white text-[15px] p-[17px] rounded-xl w-full md:w-[68%] mx-auto text-center mb-[40px]">
          <p>
            Uwaga! W ostatnim czasie dostajemy wiele informacji o próbie
            podszycia się pod nasz serwis. Jeśli nie składałeś/aś wniosku
            samodzielnie na stronie youmoney.pl i otrzymasz SMSa który będzie
            sugerował, że wiadomość została wysłana przez nasz serwis to
            powinieneś ją zignorować. Jeśli nie złożyłeś/aś wniosku w naszym
            serwisie youmoney.pl to nie posiadamy Twoich danych osobowych, a
            wiadomości które są wysyłane z nazwą naszego portalu są fałszywe i
            mają wprowadzić Cię w błąd. Jeśli otrzymałeś podejrzany i niechciany
            SMS zgłoś go nam na nasz adres kontaktowy widoczny poniżej:
          </p>
        </div>
        <div className="text-center mb-[80px]">
          <p
            className={`${text} ${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} mb-[27px] `}
          >
            Kontakt z inspektorem Ochrony Danych Osobowych:
          </p>
          <a
            className="text-[30px] text-blue hover:text-black hover:underline duration-300 ubuntu-bold"
            href="mailto:iod@findao.pl"
          >
            iod@findao.pl
          </a>
        </div>
        <div className="text-center flex-col leading-relaxed">
          <p
            className={`${text} ${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"}`}
          >
            Jeśli chcesz usunąć swoje dane i wycofać zgody, wyślij prośbę o
            usunięcie swoich danych:
          </p>
          <a
            className="text-[24px] text-blue hover:text-black hover:underline duration-300 ubuntu-regular"
            href="https://nosms.pl/unsub?fbclid=IwAR0BAKZlSmaI4pahwokex_TQ8Lcp8V2sT6q4UyQdH8gGVEyX09FdbtPdkhY"
          >
            https://nosms.pl/unsub
          </a>
          <p
            className={`${text} ${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"}`}
          >
            lub skontaktuj się z nami na powyższy adres e-mail
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
