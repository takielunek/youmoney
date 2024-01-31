import How from "../components/HowItWorks/How";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/MainPage/Navbar/Navbar";

const HowItWorks = () => {
  return (
    <div>
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <How />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
