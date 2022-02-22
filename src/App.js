import React from "react";
// import data from "./data";
import Start from "./Components/Start";
// import Question from "./Components/Question";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
//   const questionElements = data.map(quiz => {
//     return <Question 
//             question={quiz.question} 
//             correct_answer={quiz.correct_answer} 
//             incorrect_answers={quiz.incorrect_answers}
//           />
// })

  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={<Start/>} />
      </Routes>
    </Router>
  )
}

