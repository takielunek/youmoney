import How from "../components/HowItWorks/How/How";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/HowItWorks/Navbar/Navbar";
import ColorButton from "../components/MainPage/Buttons/ColorButton";

const HowItWorks = () => {
  return (
    <div>
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <How />
      </div>
      <Footer />
      <ColorButton />
    </div>
  );
};

export default HowItWorks;
