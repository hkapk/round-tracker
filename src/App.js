import React, { useState, useEffect } from "react";
import Header from './components/Header';
import ScoreForm from "./components/ScoreForm";

function App() {

  const [score, setScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);




  return (
    <div className="App">
      <Header totalScore={totalScore} />
      <ScoreForm />
    </div>
  );
}

export default App;
