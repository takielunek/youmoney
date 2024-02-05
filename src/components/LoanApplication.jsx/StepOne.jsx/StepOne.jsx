import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";
import Navbar from "./Navbar";
import Form from "./Form";

const StepOne = () => {

    const currentYear = new Date().getFullYear();

  return (
    <section className="border-b-[8px] border-blue">
      <Navbar />
      <Form />
      <div className="my-[54px]">
        <a href="/" className="grid place-content-center">
          <img src={darkLogo} alt="Logo" className="h-[54px]" />
        </a>
        <div className="mt-[54px] text-grayish text-center text-[12px]">
          <p>&copy; {currentYear} - Youmoney.pl. Wszystkie Prawa Zastrzeżone</p>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
