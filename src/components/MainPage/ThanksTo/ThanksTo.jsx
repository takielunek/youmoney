import bg2 from "../../../assets/bg/bg2.png"

const ThanksTo = () => {
  return (
   <section className="bg-blue">
   <div className="wrapper flex relative">
     <div className="w-1/2">
        <img src={bg2} alt="" />
     </div>
    <div className="w-[50%] text-white pt-[90px] absolute right-0 pl-[40px] regular">
       <div>
         <p className="text-[33px]">Dzięki <span className="bold underline">youmoney.pl</span> jednym wnioskiem znajdziesz dziesiątki ofert pożyczkodawców, którzy <span className="bold underline">przyznają Ci pożyczkę.</span></p>
        <p className="text-[24px] mt-[18px] light">Niezależnie od Twojej historii kredytowej!</p>
       </div>
          <div className="mt-[40px]">
             <a href=""><button className=" regular px-[30px] py-[12px] border-2 border-white bg-blue text-white text-[18px] rounded-2xl hover:text-blue hover:bg-white duration-300">Przejdź do wniosku</button></a>
          </div>
    </div>
   </div>
   </section>
  )
}

export default ThanksTo