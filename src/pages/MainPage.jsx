import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Questions from "../components/MainPage/Questions/Questions";
import Header from "../components/MainPage/Header/Header";
import HowItWorks from "../components/MainPage/HowItWorks/HowItWorks";
import Loan from "../components/MainPage/Loan/Loan";
import Opinions from "../components/MainPage/Opinions/Opinions";
import ThanksTo from "../components/MainPage/ThanksTo/ThanksTo";
import Benefits from "../components/MainPage/Benefits/Benefits";
import Answers from "../components/MainPage/Answers/Answers";
import Footer from "../components/MainPage/Footer/Footer";
import "./index.js";
import LoanButton from "../components/MainPage/Buttons/LoanButton.jsx";
import { useContext } from "react";
import { ThemeContext } from "../App";

const MainPage = () => {
  const sectionsWrapper = "wrapper w-11/12 md:w-10/12 mx-auto ";
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-darkMode"} relative`}
    >
      <Header />
      <HowItWorks />
      <ThanksTo />
      <div className={`${sectionsWrapper}`}>
        <AboutUs />
        <Opinions />
      </div>
      <Loan />
      <Questions />
      <Benefits />
      <Answers />
      <Footer />
      <LoanButton />
    </div>
  );
};

export default MainPage;

// {`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"}`}