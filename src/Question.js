import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <h3 className="question-text">{props.question}</h3>
            <button className="correct-answer-btn">{props.correct_answer}</button> 
            <button className="incorrect-answer-btn">{props.incorrect_answers}</button>
            <hr className="underline"/>
        </div>
    )
}
