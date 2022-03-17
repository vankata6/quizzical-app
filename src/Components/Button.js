import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Button() {

    const [buttonText, setButtonText] = useState(false);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
  
    useEffect(() => {
      const start = () => navigate('/'); 
      if(count === 2) { start(); }
    })
  
    function handleClick() {
      setButtonText(!buttonText)
      setCount(count + 1)
    }

    return(
        <button 
            className="check-btn"
            onClick={handleClick}
        >{buttonText ? "Play Again" : "Check Answers"}</button>
    )
}