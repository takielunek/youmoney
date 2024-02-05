import AboutUs from "../pages/AboutUs";
import Collaboration from "../pages/Collaboration";
import Contact from "../pages/Contact";
import HowItWorks from "../pages/HowItWorks";
import ListOfPartners from "../pages/ListOfPartners";
import MainPage from "../pages/MainPage";
import { Routes, Route } from "react-router-dom";
import DeleteYourData from "./YourData/DeleteYourData";
import StepOne from "./LoanApplication.jsx/StepOne.jsx/StepOne";
import StepTwo from "./LoanApplication.jsx/StepTwo.jsx/StepTwo";
import StepThree from "./LoanApplication.jsx/StepThree.jsx/StepThree";
import StepFour from "./LoanApplication.jsx/StepFour.jsx/StepFour";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/how" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/list" element={<ListOfPartners />} />
      <Route path="/data" element={<DeleteYourData />} />
      <Route path="/step1" element={<StepOne />} />
      <Route path="/step2" element={<StepTwo />} />
      <Route path="/step3" element={<StepThree />} />
      <Route path="/step4" element={<StepFour />} />
    </Routes>
  );
};

export default AllRoutes;
