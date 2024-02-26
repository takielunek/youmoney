import { how } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const How = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section>
      <div>
        <h1 className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[40px] sm:text-[50px] bold mt-[50px] mb-[100px] sm:my-[100px]`}>
          Jak działa youmoney.pl?
        </h1>

        <div className="sm:flex mb-[60px] gap-x-[32px]">
          {how.map((how) => (
            <div key={how.id} className="w-[100%] xs:w-[83%] sm:w-1/3 mx-auto">
              <div className="grid place-content-center mb-[50px]">
                <img className="h-[200px]" src={how.image} alt="Graphics" />
              </div>
              <div className=" text-lightGrey text-center mb-[56px]">
                <p className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[20px] bold mb-[20px]`}>{how.title}</p>
                <p className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[13px] ubuntu-regular`}>{how.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="xmd:w-3/4 xl:w-1/2 mx-auto text-center mt-[100px] mb-[150px]">
          <p className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} ubuntu-bold text-[20px] sm:text-[27px]`}>
            Wróć na{" "}
            <span className={`${theme === "light" ? "hover:text-darkGrey" : "hover:text-darkModeBlueButton"} text-blue hover:underline duration-300 cursor-pointer`}>
              youmoney.pl
            </span>{" "}
            po kolejną pożyczkę jeśli będziesz nadal potrzebować pieniędzy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
