import { useContext } from "react";
import { ThemeContext } from "./../../App";

const CollaborationWithUs = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="mb-[280px]">
      <h1 className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[40px] sm:text-[50px] bold mt-[20px] sm:mt-[50px] mb-[100px] sm:my-[100px]`}>
        Współpraca
      </h1>
      <div className="text-center">
        <p className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} text-[15px] mb-[27px] ubuntu-regular`}>
          Kontakt z nami:
        </p>
        <a
          className={`${theme === "light" ? "hover:text-darkGrey" : "hover:text-darkModeBlueButton"} text-[30px] text-blue  hover:underline duration-300 ubuntu-bold`}
          href="mailto:kontakt@findao.pl"
        >
          kontakt@findao.pl
        </a>
      </div>
    </section>
  );
};

export default CollaborationWithUs;
