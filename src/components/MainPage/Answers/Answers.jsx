import { answers } from "./index.js";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Answers = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
 <section className="wrapper">
  <div className="w-10/12 sm:w-[77%] mx-auto mb-[100px]">
         {answers.map((answers) => (
            <div key={answers.id}>
                <p className={`${theme === "light" ? "text-darkGrayish" : "text-superLightGrey2"} text-[19px] md:text-[22px] mb-[7.2px] ubuntu-bold`}>{answers.title}</p>
                <p className={`${theme === "light" ? "text-lightGrey" : "text-superLightGrey2"} text-[14px] md:text-[16px] mb-[18px]ubuntu-regular text-justify`}>{answers.text}</p>
            </div>
             ))}
       </div>
 </section> 
  )
}

export default Answers