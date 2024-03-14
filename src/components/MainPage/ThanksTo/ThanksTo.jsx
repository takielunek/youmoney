import bg2 from "../../../assets/MainPage/bg/bg2.png";
import bg3 from "../../../assets/MainPage/bg/bg3.png";

const ThanksTo = () => {
  return (
    <section className="bg-bgBlue mt-[140px]">
      <div className="sm:flex relative pb-[96px] md:pb-[144px] sm:py-[64px] pt-[48px] md:pt-[90px]">
        <div className="sm:w-[40%] ">
          <img
            className="absolute top-0 md:bottom-0 left-0 hidden sm:block z-0 h-[300px] xmd:h-[350px] md:h-full md:-left-[120px] lg:-left-[220px] xlg:-left-[150px] xxl:-left-[100px] xl:left-0"
            src={bg2}
            alt="Woman"
          />
          <img
            className="absolute bottom-0 -left-20 block sm:hidden z-0 w-[320px]"
            src={bg3}
            alt="Woman"
          />
        </div>

        <div className="text-white px-[30px] ss:px-[80px] xsm:px-[30px] xsm:w-[80%] sm:w-[50%] mx-auto xlg:w-[35%] xl:w-[30%] xl:ml-[100px]">
          <div className="ml-[65px] xs:ml-[75px] sm:ml-0">
            <p className="text-[17px] sm:text-[21px] lg:text-[33px]">
              Dzięki <span className="bold underline">youmoney.pl</span> jednym
              wnioskiem znajdziesz dziesiątki ofert pożyczkodawców, którzy{" "}
              przyznają Ci pożyczkę.
            </p>
            <p className=" z-20 text-[17px] sm:text-[21px] lg:text-[33px] mt-[30px] sm:mt-[40px] bold underline">
              Niezależnie od Twojej historii kredytowej!
            </p>
            <div className="  mt-[30px] md:mt-[40px] flex justify-start ">
              <a href="#header" className="z-20">
                <button className=" medium px-[20px] sm:px-[30px] py-[12px] border-2 border-white bg-white text-blue text-[15px] sm:text-[16px] lg:text-[18px] rounded-2xl hover:text-white hover:bg-blue duration-300">
                  Przejdź do wniosku
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksTo;
