import React, {useRef} from 'react';

function ScoreForm({score, setScore}) {
    const location = useRef(null);
    const par = useRef(null);
    const strokes = useRef(null);
    const date = useRef(null);

    const AddScore = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setScore([...score, {
            "location": location.current.value,
            "par": par.current.value,
            "strokes": strokes.current.value,
            "date": newD.getTime()
        }]);

        location.current.value= "";
        par.current.value= null;
        strokes.current.value= null;
        date.current.value= null;

    }

  return (
    <form className='score-form' onSubmit={AddScore}>  
    <div className= 'form-inner'>
        <input type= 'text' name="location" id="location"
        placeholder="Location..." ref={location}/>
        <input type= 'number' name="par" id="par"
        placeholder="Par" ref={par}/>
        <input type= 'number' name="score" id="score"
        placeholder="Score" ref={strokes}/>
        <input type= 'date' name="date" id="date"
        placeholder="Date..." ref={date}/>
        <input type='submit' value ='add Score' />
    </div>
    </form>
  )
}

export default ScoreForm;
