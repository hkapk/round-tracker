import React from 'react'

function Header({totalScore}) {
  return (
    <header>
      <h1> Score Tracker</h1>
      <div className='total-score'> Current Score: {totalScore} </
      div>
    </header>
  )
}

export default Header
