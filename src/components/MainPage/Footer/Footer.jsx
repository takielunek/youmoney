import lightLogo from "../../../assets/logo/lightLogo.svg"
import { footer } from "../../../index.js";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
    <section className="bg-darkBlue pt-[96px] sm:pt-[108px] pb-[54px]">
        <div className="wrapper sm:flex w-11/12 md:w-10/12">
            <div className="w-11/12 ss:w-2/3 sm:w-1/4 flex flex-col relative mx-auto">
                <img className="h-[54px] absolute" src={lightLogo} alt="Logo" />
                <div className="flex flex-col text-[14px] text-lightGrayish medium mt-[108px] gap-[8px]">
                    <a className="hover:text-white" href="">O nas</a>
                    <a className="hover:text-white" href="">Kontakt</a>
                    <a className="hover:text-white" href="">Współpraca</a>
                </div>
            </div>
            <div className="w-11/12 ss:w-2/3 sm:w-1/4 flex flex-col medium pt-[30px] pb-[60px] sm:pb-0 mx-auto">
                <p className="text-[16px] md:text-[18px] text-white">Może Ci się przydać</p>
                <a className="text-[14px] text-lightGrayish my-[18px] hover:text-white" href="">Jak to działa</a>
                <p className="text-[16px] md:text-[18px] text-white">Obsługa klienta</p>
                <div className="flex flex-col mt-[18px] gap-[8px] text-[14px] text-lightGrayish">
                <a className="hover:text-white" href="">Polityka prywatności serwisu</a>
                <a className="hover:text-white" href="">Regulamin serwisu</a>
                <a className="hover:text-white" href="">Lista partnerów współpracujących</a>
                <a className="hover:text-white" href="">Usuń swoje dane</a>
                </div>
            </div>
       <div className="w-11/12 ss:w-2/3 sm:w-1/2 flex flex-col gap-[10px] mx-auto">
         {footer.map((footer) => (
            <div key={footer.id}>
                <p className="text-grayish text-[12px] text-justify">{footer.text}</p>
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