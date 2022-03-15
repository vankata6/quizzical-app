import React from "react";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import Answers from "./Components/Answers"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <Router>    
      <Routes>
        <Route exact path="/" element={<Start/>} />
        <Route exact path="/quiz" element={<Quiz/>} />
        <Route exact path="/answers" element={<Answers/>} />
      </Routes>
    </Router>
  )
}

