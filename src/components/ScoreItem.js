import React from 'react';

function ScoreItem( { score, index, removeScore} ) {
    let date = new Date (score.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const removeHandle = i => {
        removeScore(i);
    }
  return (
    <div className='score-item'>
        <button className='remove-item' onClick={() => removeHandle(index)
        }> X </button>
    <div className="score-item">Location: {score.location}</div>
    <div className="score-item">Par: {score.par}</div>
    <div className="score-item">Score: {score.strokes}</div>
    <div className="score-item"> Round Total: {score.strokes - score.par} </div>
    <div className="score-item">Date: { month + "/" + day + "/" + year }</div>
    </div>
  )
}

export default ScoreItem;
