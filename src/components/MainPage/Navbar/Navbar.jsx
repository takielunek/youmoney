import { useState, useEffect } from "react";
import NavbarColorButton from "../Buttons/NavbarColorButton";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`${isScrolled ? "navbar scrolled bg-white z-50" : "navbar bg-transparent"} fixed  w-full duration-100`}
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
