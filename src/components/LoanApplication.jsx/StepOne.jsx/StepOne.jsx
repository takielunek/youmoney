import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import Navbar from "./Navbar";
import Form from "./Form";
import Progress from "./Progress";

const StepOne = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="border-b-[8px] border-blue">
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrappe">
        <Navbar />
        <div className="pt-0 pb-[40px] sm:py-[54px]">
          <Progress />
          <Form />
        </div>
        <div className="my-[40px] sm:my-[54px]">
          <a href="/" className="grid place-content-center">
            <img src={darkLogo} alt="Logo" className="h-[54px]" />
          </a>
          <div className="mt-[48px] sm:mt-[54px] text-grayish text-center text-[12px]">
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
