import How from "../components/HowItWorks/How/How";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/HowItWorks/Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../App";

const HowItWorks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}
    >
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <How />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
