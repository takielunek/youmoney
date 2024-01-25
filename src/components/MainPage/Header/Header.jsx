import woman from "../../../assets/bg/bg1.png"
import bulb from "../../../assets/other/bulb.svg"


const Header = () => {
  return (
    <section id="header" className="sm:pt-[50px] pb-[150px] sm:pb-[150px] relative px-[30px] w-full xs:w-[90%] xss:w-[80%] xsm:w-[70%] sm:w-full mx-auto sm:px-0">
        <div className="sm:flex sm:justify-between">
            <div className="uppercase bold w-1/2 z-10 relative mt-[18px]">
               <p className="text-[32px] sm:text-[57.6px] text-grey">szybka <br /> pożyczka <br /> online</p>
               <p className="text-[27px] sm:text-[49px] underline text-blue -rotate-[7deg] absolute top-[130px] sm:top-[235px] left-[10px] sm:left-[15px] w-[200px] sm:w-[300px]">w 15 minut</p>
            </div>

{/* application  */}
            <div className="sm:w-1/2 mt-[50px] z-10">
           
              <div className="w-full sm:w-[79%] sm:float-right">
                  <div className="bg-white px-[30px] sm:px-[35px] py-[20px] sm:py-[25px] rounded-2xl sm:h-[396px]">
                 <div className="flex justify-between">
                      <p className="text-lightGrey text-[15px] sm:text-[18px] regular self-center">Ile chcesz pożyczyć?</p>
                      <p className="text-blue text-[21px] sm:text-[30px] bold">2000 zł</p>
                 </div>
                 <div className="flex justify-between text-superLightGrey text-[15px] light">
                      <p>100 zł</p>
                      <p>10 000 zł</p>
                 </div>
                 <div className="flex justify-between">
                      <p className="text-lightGrey text-[15px] sm:text-[18px] regular self-center">Na ile czasu?</p>
                      <p className="text-blue text-[21px] sm:text-[30px] bold">30 dni</p>
                 </div>
                  <div className="flex justify-between text-superLightGrey text-[15px] light">
                      <p>15 dni</p>
                      <p>60 dni</p>
                 </div>

                 <div className="flex justify-around bg-blue py-[13.5px] px-[12px] rounded-xl mt-[36px] mb-[18px]">
                      <a className="text-white text-[16px] sm:text-[18px] regular" href=""><button>Wnioskuj o pożyczkę</button></a>
                 </div>
                 <div className="flex justify-around gap-[10px]">
                        <img className="h-[20px] w-[20px]" src={bulb} alt="Bulb icon" />
                        <p className="text-superLightGrey text-[13px] medium">Bezpłatnie i bez zobowiązań!</p>
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


             <div className="text-center">
                <a href=""><button className="underline text-blue text-[16px] regular" >Warunki pożyczki</button></a>
             </div>
              </div>
            </div>




        </div>
 <div className="z-0">
  <img className="absolute -top-[50px] sm:top-[70px] right-0 xs:right-[50px] sm:left-[180px] h-[250px] sm:h-[663px]" src={woman} alt="Woman" />
 </div>
    </section>
  )
}

export default Header