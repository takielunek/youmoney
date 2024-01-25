import darkLogo from "../../../assets/logo/darkLogo.svg"

const Navbar = () => {
  return (
    <section>
      <div className="flex justify-between py-[15px] medium">
        <img className="h-[54px] px-[30px] sm:px-0" src={darkLogo} alt="Logo" />
        <div className="text-lightGrey flex gap-[50px] self-center">
          <a className="hover:text-blue duration-300 hidden md:block" href="">O youmoney</a>
          <a className="hover:text-blue duration-300 hidden md:block" href="">Jak to działa</a>
        </div>
   <div className="self-center hidden sm:block">
         <a  className="text-blue border-[2px] border-blue px-[20px] py-[10px] rounded-xl hover:border-darkGrey hover:text-darkGrey duration-300" href=""><button>Weź pożyczkę</button></a>
   </div>
      </div>
    </section>
  );
}

export default Navbar;