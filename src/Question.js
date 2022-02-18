import React from "react";

function Question(props) {
    return (
        <div className="question">
            <h3>{props.question}</h3>
            <p>{props.correct_answer}</p>
            <hr/>
        </div>
    )
}

export default Question