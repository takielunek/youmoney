import darkLogo from "../../assets/MainPage/logo/darkLogo.svg";
import lightLogo from "../../assets/MainPage/logo/lightLogo.svg";
import Navbar from "./Navbar/Navbar";
import Form from "./Form";
import Progress from "./Progress";
import { useEffect, useContext } from "react";
import { ThemeContext } from "./../../App";


const StepOne = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

    useEffect(() => {
      document.title = "Krok 1 - Wniosek Youmoney";
    }, []);

  return (
    <section className="border-b-[8px] border-blue">
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrappe ">
        <Navbar />
        <div className="pt-0 pb-[40px] sm:py-[54px]">
          <Progress />
          <Form />
        </div>
        <div className="my-[40px] sm:my-[54px]">
          <a href="/" className="grid place-content-center ">
            <img
              src={theme === "light" ? darkLogo : lightLogo}
              alt="Logo"
              className="h-[54px]"
            />
          </a>
          <div className={`${theme === "light" ? "text-grayish" : "text-superLightGrey2"} mt-[48px] sm:mt-[54px] text-center text-[12px]`}>
            <p>
              &copy; {currentYear} - Youmoney.pl. Wszystkie Prawa Zastrzeżone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
