import darkLogo from "../../../assets/MainPage/logo/darkLogo.svg";

const Navbar = () => {
  const spanText = "text-[20px] sm:text-[22px] md:text-[25px] text-blue mx-[10px] font-bold";

  return (
    <div className="wrapper">
      <div className="sm:flex justify-between py-[15px]">
        <a href="/">
          <img className="h-[54px]" src={darkLogo} alt="Logo" />
        </a>
        <div className="xxs:flex text-lightGrey text-[14px] sm:text-[16px] md:text-[18px] self-center mt-[15px] sm:mt-0">
          <p>
            Aplikujesz o <span className={`${spanText}`}>2000 zł</span>
          </p>
          <p>
            na okres <span className={`${spanText}`}>30 dni</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
