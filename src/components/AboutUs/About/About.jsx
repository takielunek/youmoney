import woman from "../../../assets/AboutUs/about.png";

const About = () => {
  return (
    <div className="px-[30px] sm:flex pt-0 sm:pt-[50px]">
      <div className="scale-x-[-1] sm:scale-x-[1] sm:w-[40%]">
        <img
          src={woman}
          alt="Woman"
          className="h-[288px] sm:h-[376px] md:h-[470px] flex mx-auto"
        />
      </div>
      <div className="text-[14px] sm:text-[17px] regular text-lightGrey pt-[16px] sm:pt-[50px] sm:w-[60%] ">
        <p className="w-full xss:w-3/4 mx-auto sm:m-[64px] md:m-[68px]">
          <span className="bold">Youmoney.pl</span> to bezpłatna usługa online,
          która za darmo połączy Cię z pożyczkodawcami z całej Polski.
          Przedstawimy dla Ciebie najkorzystniejszą i najtańszą ofertę. Ty nie
          musisz nic robić, tylko wypłacić pieniądze od pożyczkodawcy.
        </p>
      </div>
    </div>
  );
};

export default About;
