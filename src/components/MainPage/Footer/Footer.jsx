import lightLogo from "../../../assets/logo/lightLogo.svg"
import { footer } from "../../../index.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <section className="bg-darkBlue pt-[108px] pb-[54px]">
        <div className="wrapper flex">
            <div className="w-1/4 flex flex-col relative">
                <img className="h-[54px] absolute" src={lightLogo} alt="" />
                <div className="flex flex-col text-[14px] text-lightGrayish medium mt-[108px] gap-[8px]">
                    <a href="">O nas</a>
                    <a href="">Kontakt</a>
                    <a href="">Współpraca</a>
                </div>
            </div>
            <div className="w-1/4 flex flex-col medium pt-[30px]">
                <p className="text-[18px] text-white">Może Ci się przydać</p>
                <a className="text-[14px] text-lightGrayish my-[18px]" href="">Jak to działa</a>
                <p className="text-[18px] text-white">Obsługa klienta</p>
                <div className="flex flex-col mt-[18px] gap-[8px]">
                <a className="text-[14px] text-lightGrayish" href="">Polityka prywatności serwisu</a>
                <a className="text-[14px] text-lightGrayish" href="">Regulamin serwisu</a>
                <a className="text-[14px] text-lightGrayish" href="">Lista partnerów współpracujących</a>
                <a className="text-[14px] text-lightGrayish" href="">Usuń swoje dane</a>
                </div>
            </div>
       <div className="w-1/2 flex flex-col gap-[10px]">
         {footer.map((footer) => (
            <div key={footer.id}>
                <p className="text-grayish text-[12px]">{footer.text}</p>
            </div>
             ))}
       </div>
        </div>
        <div className="mt-[54px] text-grayish text-center text-[12px]">
            <p>&copy; {currentYear} youmoney.pl</p>
        </div>
    </section>
  )
}

export default Footer