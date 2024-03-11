import NavbarColorButton from "../Buttons/NavbarColorButton";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="bg-transparent">
      <div className="flex justify-between py-[15px]">
        <Logo />
        <NavbarColorButton />
      </div>
    </div>
  );
};

export default Navbar;
