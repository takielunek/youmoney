import AboutUs from "../components/MainPage/AboutUs/AboutUs";
import Questions from "../components/MainPage/Questions/Questions";
import Header from "../components/MainPage/Header/Header";
import HowItWorks from "../components/MainPage/HowItWorks/HowItWorks";
import Loan from "../components/MainPage/Loan/Loan";
import Navbar from "../components/MainPage/Navbar/Navbar";
import Opinions from "../components/MainPage/Opinions/Opinions";
import ThanksTo from "../components/MainPage/ThanksTo/ThanksTo";
import Benefits from "../components/MainPage/Benefits/Benefits";
import Answers from "../components/MainPage/Answers/Answers";
import Footer from "../components/MainPage/Footer/Footer";
import money from "../assets/MainPage/other/money.svg";
import { VscColorMode } from "react-icons/vsc";
import "./index.js"

const MainPage = () => {

  return (
    <div className="relative">
      <div  className="bg-header" >
        <div className="wrapper w-11/12 md:w-10/12 mx-auto ">
          <Navbar />
          <Header />
        </div>
      </div>
      <HowItWorks />
      <ThanksTo />
      <div className="wrapper w-11/12 md:w-10/12 mx-auto ">
        <AboutUs />
        <Opinions />
      </div>
      <Loan />
      <Questions />
      <Benefits />
      <Answers />
      <Footer />

      <a href="">
        <button
          id="toTopLink"
          className="hidden fixed bottom-[16px] right-[80px] bg-blue hover:bg-darkBlue duration-500 text-white ubuntu-medium text-[16px] px-[48px] py-[10px] border-2 border-white rounded-xl"
        >
          Weź pożyczkę{" "}
          <div className="relative">
            <img
              className="absolute opacity-25 h-[45px] w-[51px] -bottom-[13px] -right-[50px]"
              src={money}
              alt="Bills"
            />
          </div>
        </button>
      </a>

      <div className="fixed bottom-[16px] right-[15px] bg-darkGrey text-white p-[16px] rounded-full cursor-pointer">
        <VscColorMode />
      </div>
    </div>
  );
};

export default MainPage;
