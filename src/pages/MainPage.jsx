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

const MainPage = () => {
  const sectionsWrapper = "wrapper w-11/12 md:w-10/12 mx-auto ";

  return (
    <div className="relative background">
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
