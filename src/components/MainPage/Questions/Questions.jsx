import { questions } from "./index.js";
import Accordion from "./Accordion.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Questions = () => {
const { theme } = useContext(ThemeContext);

  return (
   <section className="wrapper">
         <div className="text-center">
              <h1 className={`${theme === "light" ? "text-grey" : "text-superLightGrey2"} text-[30px] sm:text-[40px] md:text-[54px] bold mt-[150px]`}>Najczęściej zadawane pytania</h1>
         </div>
         <div className="w-10/12 sm:w-[56%] mx-auto py-[60px]">
           {questions.map((questions) => ( 
              <div key={questions.id} >
                 <Accordion title={questions.title} answer={questions.text} />
              </div>
            ))}
          </div>

   </section>
  )
}

export default Questions;