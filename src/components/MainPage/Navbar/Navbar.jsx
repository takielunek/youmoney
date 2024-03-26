import { useState, useEffect } from "react";
import NavbarColorButton from "../Buttons/NavbarColorButton";
import Logo from "./Logo";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isScrolled ? `scrolled ${theme === `light` ? `bg-white` : `bg-darkMode`} z-50` : " bg-transparent"} navbar fixed  w-full duration-100 }`}
    >
      <div className="wrapper mx-auto">
        <div className="flex justify-between py-[15px]">
          <Logo />
          <NavbarColorButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
