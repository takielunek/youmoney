
import CollaborationWithUs from "../components/Collaboration/CollaborationWithUs";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/MainPage/Navbar/Navbar";

const Collaboration = () => {
  return (
    <div>
      <div className="w-10/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <CollaborationWithUs />
      </div>
      <Footer />
    </div>
  );
};

export default Collaboration;
