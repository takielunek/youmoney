import bulb from "../../../assets/other/bulb.svg"
import woman from "../../../assets/bg/bg1.png"

const Header = () => {
  return (
    <section className="pt-[50px] pb-[150px] relative">
        <div className="flex justify-between">
            <div className="text-[57.6px] uppercase bold w-1/2 z-10">
               <p className="text-grey leading-[70px]">szybka <br /> pożyczka <br /> online <br /> <span className="underline text-blue rotate-45">w 15 minut</span></p>
            </div>
            <div className="w-1/2 z-10">
           
              <div className="w-10/12 float-right">
                  <div className="bg-white px-[35px] py-[25px] rounded-2xl h-[445px]">
                 <div className="flex justify-between">
                      <p className="text-lightGrey text-[18px] regular self-center">Ile chcesz pożyczyć?</p>
                      <p className="text-blue text-[30px] bold">2000 zł</p>
                 </div>
                 <div className="flex justify-between text-superLightGrey text-[15px] light">
                      <p>100 zł</p>
                      <p>10 000 zł</p>
                 </div>
                 <div className="flex justify-between">
                      <p className="text-lightGrey text-[18px] regular self-center">Na ile czasu?</p>
                      <p className="text-blue text-[30px] bold">30 dni</p>
                 </div>
                  <div className="flex justify-between text-superLightGrey text-[15px] light">
                      <p>15 dni</p>
                      <p>60 dni</p>
                 </div>

                 <div className="flex justify-around bg-blue py-[13.5px] rounded-xl mt-[36px] mb-[18px]">
                      <a className="text-white text-[18px] regular" href=""><button>Wnioskuj o pożyczkę</button></a>
                 </div>
                 <div className="flex justify-center gap-[10px]">
                        <img className="h-[20px] w-[20px]" src={bulb} alt="Bulb icon" />
                        <p className="text-superLightGrey text-[13px] medium">Bezpłatnie i bez zobowiązań!</p>
                  </div>
               </div>
             


             <div className="flex py-[15px] text-[14px] text-lightGrey z-10">
                <div className="flex w-[50%] justify-center">
                    <p className="mr-2 regular">Kwota do spłaty:</p>
                    <p className="bold">4800 zł</p>
                </div>
                <div className="flex w-[50%] justify-center">
                    <p className="mr-2 regular">Data spłaty:</p>
                    <p className="bold">18.02.2024</p>
                </div>

             </div>
             <div className="text-center">
                <a href=""><button className="underline text-blue text-[16px] regular" >Warunki pożyczki</button></a>
             </div>
              </div>



            </div>
        </div>
 <div className="z-0">
  <img className="absolute top-20 left-40 h-[663px]" src={woman} alt="" />
 </div>
    </section>
  )
}

export default Header