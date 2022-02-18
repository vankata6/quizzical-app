import React from "react";
import data from "./data";
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
      {questionElements}
      <button className="check-btn">Check Answers</button>
    </div>
  )
}

