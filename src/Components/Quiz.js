import React, { useState, useEffect } from "react";
import Question from './Question';

export default function Quiz() {

  const [object, setObject] = useState({})

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
        <button className="check-btn">Check Answers</button>
    </div>
)
}