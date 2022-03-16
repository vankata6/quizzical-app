import React, { useState, useEffect } from "react";
import Question from './Question';
import { useNavigate } from "react-router-dom";

export default function Quiz() {

  const [object, setObject] = useState({})
  const [buttonText, setButtonText] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  
  const questionElements = object.results?.map(quiz => {
    return <Question 
    question={quiz.question} 
    correct_answer={quiz.correct_answer} 
    incorrect_answers={quiz.incorrect_answers}
    key={quiz.question}
    />
  })
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean')
    .then(res => res.json())
    .then(data => setObject(data))
  }, [])
  
  useEffect(() => {
    const start = () => navigate('/'); 
    if(count === 2) { start(); }
  })

  function checkAnswers() {
    setButtonText(!buttonText)
  }

  function playAgain() {
  setCount(count + 1)
  }
  
  return(
    <div>
        {questionElements}
        <button 
          className="check-btn"
          onClick={() => {checkAnswers(); playAgain()}}
        >{buttonText ? "Play Again" : "Check Answers"}</button>
    </div>
)
}