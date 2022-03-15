import React, { useState, useEffect } from "react";
import Question from './Question';
import { useNavigate } from "react-router-dom";

export default function Quiz() {

  const [object, setObject] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean')
    .then(res => res.json())
    .then(data => setObject(data))
  }, [])

  const questionElements = object.results?.map(quiz => {
    return <Question 
            question={quiz.question} 
            correct_answer={quiz.correct_answer} 
            incorrect_answers={quiz.incorrect_answers}
            key={quiz.question}
          />
  })

return(
    <div>
        {questionElements}
        <button 
          className="check-btn"
          onClick={() => navigate('/answers')} 
        >Check Answers</button>
    </div>
)
}