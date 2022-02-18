import React from "react";
import data from "./data";
import Question from "./Question";

export default function App() {
//   const questionElements = data.map(quiz => {
//         return <Question question={quiz.question} correct_answer={quiz.correct_answer} />
// })

  return (
    <div>
      <h1>Hello</h1>
      <Question question={data[0].question} correct_answer={data[0].correct_answer}/>
      <Question question={data[1].question} correct_answer={data[1].correct_answer}/>
      <Question question={data[2].question} correct_answer={data[2].correct_answer}/>
      <Question question={data[3].question} correct_answer={data[3].correct_answer}/>
      <Question question={data[4].question} correct_answer={data[4].correct_answer}/>
    </div>
  )
}

