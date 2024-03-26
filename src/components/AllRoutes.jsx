import { Routes, Route } from "react-router-dom";
import Collaboration from "../pages/Collaboration";
import Contact from "../pages/Contact";
import ListOfPartners from "../pages/ListOfPartners";
import MainPage from "../pages/MainPage";
import DeleteYourDataPage from "../pages/DeleteYourDataPage";
import StepOnePage from "../pages/StepOnePage";
import MessagePage from "../pages/MessagePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/list" element={<ListOfPartners />} />
      <Route path="/data" element={<DeleteYourDataPage />} />
      <Route path="/step1/:amount/:period" element={<StepOnePage />} />
      <Route path="/message" element={<MessagePage />} />
    </Routes>
  );
};

export default AllRoutes;
