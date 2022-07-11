import React, { useState, useEffect } from "react";
import Header from './components/Header';
import ScoreForm from "./components/ScoreForm";
import ScoreList from "./components/ScoreList";

function App() {

  const [score, setScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    let tempPar = 0;
    let tempStrokes = 0;
    for(let i = 0; i < score.length; i++) {
      tempPar += parseInt(score[i].par);
    }
    for(let i = 0; i < score.length; i++) {
      tempStrokes += parseInt(score[i].strokes);
    }
    setTotalScore(tempStrokes - tempPar);
  }, [score]);

  return (
    <div className="App">
      <Header totalScore={totalScore} />
      <ScoreForm score={score} setScore={setScore}/>
      <ScoreList score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
