import React from "react";
import data from "./data";
import Start from "./Start";
import Question from "./Question";

export default function App() {

  const questionElements = data.map(quiz => {
        return <Question 
                question={quiz.question} 
                correct_answer={quiz.correct_answer} 
                incorrect_answers={quiz.incorrect_answers}
              />
})

  return (
    <div>
      <Start/>
      <button className="check-btn">Start quiz</button>
      {/* {questionElements}
      <button className="check-btn">Check Answers</button> */}
    </div>
  )
}

