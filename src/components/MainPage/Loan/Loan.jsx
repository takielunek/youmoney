import { loan } from "./index.js";
import money from "../../../assets/MainPage/other/money.png";

const Loan = () => {
  return (
    <section className="bg-blue my-[85px]">
      <div className="wrapper py-[119px] relative">
        <div className="text-center">
          <h1 className="text-[30px] sm:text-[40px] md:text-[54px] bold text-white">
            Ile chcesz pożyczyć?
          </h1>
        </div>
        <div className="flex flex-wrap justify-center my-[51px] w-11/12 xss:w-3/4 md:w-10/12 mx-auto">
          {loan.map((loan) => (
            <div
              key={loan.id}
              className="border-2 rounded-2xl w-[110px] h-[53px] m-[5px] hover:bg-white duration-700"
            >
              <a
                className="text-[16px] sm:text-[17px] md:text-[18px] text-white hover:text-blue regular h-[50px] grid place-items-center"
                href={`/step1/${loan.amount}/30`}
              >
                {loan.amount}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            className="text-[16px] sm:text-[17px] md:text-[18px] underline text-white medium hover:text-superLightGrey duration-700"
            href="#header"
          >
            Potrzebuje innej kwoty
          </a>
        </div>

        <img
          className="absolute -top-28 -left-14 -rotate-[10deg] w-[320px]"
          src={money}
          alt="Bill"
        />
        <img
          className="absolute -bottom-28 -right-14 rotate-[10deg] w-[320px]"
          src={money}
          alt="Bill"
        />
      </div>
    </section>
  );
};

export default Loan;
