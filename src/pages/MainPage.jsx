import AboutUs from "../components/MainPage/AboutUs/AboutUs"
import Questions from "../components/MainPage/Questions/Questions"
import Header from "../components/MainPage/Header/Header"
import HowItWorks from "../components/MainPage/HowItWorks/HowItWorks"
import Loan from "../components/MainPage/Loan/Loan"
import Navbar from "../components/MainPage/Navbar/Navbar"
import Opinions from "../components/MainPage/Opinions/Opinions"
import ThanksTo from "../components/MainPage/ThanksTo/ThanksTo"
import Benefits from "../components/MainPage/Benefits/Benefits"
import Answers from "../components/MainPage/Answers/Answers"
import Footer from "../components/MainPage/Footer/Footer"


const MainPage = () => {
  return (
    <div>
        <div className="bg-header">
           <div className="wrapper">
            <Navbar />
            <Header />
           </div>
        </div>
           <HowItWorks />
           <ThanksTo />
           <AboutUs />
           <Opinions />
           <Loan />
           <Questions />
           <Benefits />
           <Answers />
           <Footer />
    </div>
  )
}

export default MainPage