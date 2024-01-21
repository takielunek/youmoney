import { questions } from "../../../index.js";

const Questions = () => {
  return (
   <section className="wrapper">
      <div>
         <div className="text-center">
              <h1 className="text-[54px] bold text-grey mt-[150px]">Najczęściej zadawane pytania</h1>
         </div>


     <div className="w-[57%] mx-auto">
         {questions.map((questions) => ( 
          <div key={questions.id} >
                       <div>
                        <p>{questions.title}</p>
                        <i></i>
                       </div>
                        <div>
                             <p>{questions.text}</p>
                        </div>
          </div>
        ))}
     </div>
       



      </div>
   </section>
  )
}

export default Questions;