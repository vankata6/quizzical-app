import React, { useState } from "react";

export default function Question(props) {
    const [isLeftActive, setLeftActive] = useState("false");
    const [isRightActive, setRightActive] = useState("false");

    const handleLeftToggle = () => {
      setLeftActive(!isLeftActive);
    };

    const handleRightToggle = () => {
      setRightActive(!isRightActive);
    };

    return (
        <div className="question">
            <h3 className="question-text">{props.question}</h3>
            <button 
                className={isLeftActive ? 'answer-btn' : 'marked-btn'}
                onClick={handleLeftToggle}
            >{props.correct_answer}</button> 
            <button 
                className={isRightActive ? 'answer-btn' : 'marked-btn'}
                onClick={handleRightToggle}
            >{props.incorrect_answers}</button> 
            <hr className="underline"/>
        </div>
    )
}
