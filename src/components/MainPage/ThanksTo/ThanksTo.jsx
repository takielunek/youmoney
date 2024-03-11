import bg2 from "../../../assets/MainPage/bg/bg2.png";
import bg3 from "../../../assets/MainPage/bg/bg3.png";

const ThanksTo = () => {
  return (
    <section className="bg-bgBlue mt-[140px]">
      <div className="sm:flex relative pb-[144px] pt-[90px]">
        <div className="sm:w-[40%]">
          <img
            className="absolute bottom-0 -left-[150px] xxl:left-0 hidden sm:block h-full"
            src={bg2}
            alt="Woman"
          />
          <img
            className="absolute bottom-0 -left-20 block sm:hidden z-0 w-[320px]"
            src={bg3}
            alt="Woman"
          />
        </div>

        <div className="text-white px-[30px] z-10 ml-[45px] xs:ml-[75px] xs:w-[80%] mx-auto xlg:w-[35%]">
          <p className="text-[17px] sm:text-[21px] lg:text-[33px]">
            Dzięki <span className="bold underline">youmoney.pl</span> jednym
            wnioskiem znajdziesz dziesiątki ofert pożyczkodawców, którzy{" "}
            przyznają Ci pożyczkę.
          </p>
          <p className="text-[17px] sm:text-[21px] lg:text-[33px] sm:mt-[40px] bold underline">
            Niezależnie od Twojej historii kredytowej!
          </p>
          <div className="mt-[30px] md:mt-[40px] flex justify-around sm:justify-start">
            <a href="#header">
              <button className="medium px-[30px] py-[12px] border-2 border-white bg-white text-blue text-[15px] sm:text-[16px] lg:text-[18px] rounded-2xl hover:text-white hover:bg-blue duration-300">
                Przejdź do wniosku
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThanksTo;
