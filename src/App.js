import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";
import Start from "./Components/Start";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {

  const [question, setQuestion] = useState({})

  const questionElements = question.results?.map(quiz => {
    return <Question 
      question={quiz.question} 
      key={quiz.question}
    />
  })

  const correctAnswers = question.results?.map(quiz => {
    return <Quiz
    correct_answer={quiz.correct_answer}
    incorrect_answers={quiz.incorrect_answers}
    />
  })

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean')
    .then(res => res.json())
    .then(data => setQuestion(data))
  }, [])
  
  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route exact path="/quiz" element={
          <>
            {questionElements}
            {correctAnswers}
            <Button/>
          </>
        } />
      </Routes>
    </Router>
  )
}

