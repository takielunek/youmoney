import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="flex justify-between py-[15px]">
        <a href="/">
          <img className="h-[54px]" src={darkLogo} alt="Logo" />
        </a>
        <div className="text-lightGrey text-[18px] flex self-center">
          <p>
            Aplikujesz o{" "}
            <span className="text-[25px] text-blue mx-[10px] font-bold">
              2000 zł
            </span>
          </p>
          <p>
            na okres{" "}
            <span className="text-[25px] text-blue mx-[10px] font-bold">
              30 dni
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
