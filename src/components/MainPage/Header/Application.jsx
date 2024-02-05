import bulb from "../../../assets/MainPage/other/bulb.svg";
import TermsOfTheLoan from "./TermsOfTheLoan";

const Application = () => {
  return (
    <div className="w-full sm:w-[79%] sm:float-right">
      <div className="bg-white px-[30px] sm:px-[35px] py-[20px] sm:py-[25px] rounded-2xl sm:h-[396px]">
        <div className="flex justify-between">
          <p className="text-lightGrey text-[15px] sm:text-[18px] regular self-center">
            Ile chcesz pożyczyć?
          </p>
          <p className="text-blue text-[21px] sm:text-[30px] bold">2000 zł</p>
        </div>
        <div className="flex justify-between text-superLightGrey text-[15px] light">
          <p>100 zł</p>
          <p>10 000 zł</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lightGrey text-[15px] sm:text-[18px] regular self-center">
            Na ile czasu?
          </p>
          <p className="text-blue text-[21px] sm:text-[30px] bold">30 dni</p>
        </div>
        <div className="flex justify-between text-superLightGrey text-[15px] light">
          <p>15 dni</p>
          <p>60 dni</p>
        </div>

        <div className="flex justify-around bg-blue py-[13.5px] px-[12px] rounded-xl mt-[36px] mb-[18px]">
          <a
            className="text-white text-[16px] sm:text-[18px] regular"
            href="/step1"
          >
            <button>Wnioskuj o pożyczkę</button>
          </a>
        </div>
        <div className="flex justify-around gap-[10px]">
          <img className="h-[20px] w-[20px]" src={bulb} alt="Bulb icon" />
          <p className="text-superLightGrey text-[13px] medium">
            Bezpłatnie i bez zobowiązań!
          </p>
        </div>
      </div>

      <div className="xs:flex py-[15px] text-[12px] sm:text-[14px] text-lightGrey z-10">
        <div className="flex w-full sm:w-[50%] justify-center">
          <p className="mr-2 regular">Kwota do spłaty:</p>
          <p className="bold">4800 zł</p>
        </div>
        <div className="flex w-full sm:w-[50%] justify-center">
          <p className="mr-2 regular">Data spłaty:</p>
          <p className="bold">18.02.2024</p>
        </div>
      </div>

      <TermsOfTheLoan />
    </div>
  );
};

export default Application;
