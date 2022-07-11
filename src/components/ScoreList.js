import React from 'react';
import ScoreItem from './ScoreItem';
 

function ScoreList( {score, setScore}) {

    const removeScore = i => {
        let temp = score.filter(( v, index) => index != i);
        setScore(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    } 

  return ( 
    <div className= 'score-list'> 
    {
        score.sort(sortByDate).map((value, index) => (
            <ScoreItem 
            key={index} 
            score={value} 
            index={index}
            removeScore={removeScore}/>
        ))
    }
      
    </div>
  )
}

export default ScoreList;
