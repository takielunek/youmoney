import ContactUs from "../components/Contact/ContactUs";
import ColorButton from "../components/MainPage/Buttons/ColorButton";
import Footer from "../components/MainPage/Footer/Footer";
import Navbar from "../components/MainPage/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <div className="w-10/12 ss:w-4/6 sm:w-10/12 mx-auto wrapper">
        <Navbar />
        <ContactUs />
      </div>
      <Footer />
      <ColorButton />
    </div>
  );
};

export default Contact;