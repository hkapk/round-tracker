import React from 'react';

function ScoreForm() {
  return (
    <form className='score-form' >  
    <div className= 'form-inner'>
        <input type= 'text' name="location" id="location"
        placeholder="Location..." />
        <input type= 'number' name="par" id="par"
        placeholder="Par" />
        <input type= 'number' name="score" id="score"
        placeholder="Score" />
        <input type= 'date' name="date" id="date"
        placeholder="Date..." 
        inpur type='submit' value ='add Score' />
    </div>
    </form>
  )
}

export default ScoreForm;
