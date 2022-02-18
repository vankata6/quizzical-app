import React from "react";

export default function Question(props) {
    return (
        <div className="question">
            <h3>{props.question}</h3>
            <p>{props.correct_answer} {props.incorrect_answers}</p>
            <hr/>
        </div>
    )
}
