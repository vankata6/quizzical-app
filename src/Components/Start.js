import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Start() {
    const navigate = useNavigate();

    return(
        <div className="start-page">
            <h1 className="header">Quizzical</h1>
            <h3 className="start-header">App to check your common knowledge</h3>
            <button 
                className="check-btn"
                onClick={() => navigate('/quiz')}    
            >Start quiz</button>
        </div>
    )
}