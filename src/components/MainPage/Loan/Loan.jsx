import { loan } from "../../../index.js";
import money from "../../../assets/other/money.png"

const Loan = () => {
  return (
   <section className="bg-blue my-[85px]">
      <div className="wrapper py-[119px] relative">
        <div className="text-center">
              <h1 className="text-[54px] bold text-white">Ile chcesz pożyczyć?</h1>
        </div>
           <div className="flex flex-wrap justify-center my-[51px] mx-[100px]">
         {loan.map((loan) => (
            <div key={loan.id} className="border-2 rounded-2xl w-[110px] h-[53px] m-[5px]">
                <a className="text-[18px] text-white regular h-[50px] grid place-items-center" href={loan.link}>{loan.amount}</a>
            </div>
          ))}
           </div>
        <div className="text-center">
          <a className=" text-[18px] underline text-white medium" href="">Potrzebuje innej kwoty</a>
        </div>

          <img className="absolute -top-28 -left-14 -rotate-[10deg] w-[320px]" src={money} alt="" />
          <img className="absolute -bottom-28 -right-14 rotate-[10deg] w-[320px]" src={money} alt="" />
      </div>
   </section>
  )
}

export default Loan