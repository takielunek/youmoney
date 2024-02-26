import { partners } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "./../../App";

const Partners = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="pb-[54px]">
      <h1
        className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[40px] sm:text-[50px] bold mt-[20px] sm:mt-[50px] mb-[100px] sm:my-[100px]`}
      >
        Lista partnerów współpracujących
      </h1>

      <div>
        {partners.map((partners) => (
          <div key={partners.id}>
            <p
              className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[15px] mb-[7px]`}
            >
              {partners.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
