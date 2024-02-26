import Partners from "../components/ListOfPartners/Partners";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/MainPage/Navbar/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../App";

const ListOfPartners = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-darkMode"}`}>
      <div className="w-11/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <Partners />
      </div>
      <Footer />
    </div>
  );
};

export default ListOfPartners;
