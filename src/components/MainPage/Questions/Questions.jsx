import { questions } from "../../../index.js";
import Accordion from "./Accordion.jsx";

const Questions = () => {

  return (
   <section className="wrapper">
         <div className="text-center">
              <h1 className="text-[54px] bold text-grey mt-[150px]">Najczęściej zadawane pytania</h1>
         </div>
         <div className="w-[58%] mx-auto py-[60px]">
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