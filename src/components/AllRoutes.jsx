import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Collaboration from "../pages/Collaboration";
import Contact from "../pages/Contact";
import HowItWorks from "../pages/HowItWorks";
import ListOfPartners from "../pages/ListOfPartners";
import MainPage from "../pages/MainPage";
import DeleteYourDataPage from "../pages/DeleteYourDataPage";
import StepOnePage from "../pages/StepOnePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/how" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/list" element={<ListOfPartners />} />
      <Route path="/data" element={<DeleteYourDataPage />} />
      <Route path="/step1" element={<StepOnePage />} />
    </Routes>
  );
};

export default AllRoutes;
