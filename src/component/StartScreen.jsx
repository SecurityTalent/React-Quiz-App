import React from 'react'

function StartScreen({numQuestion}) {
  return (
    <>
        <h1>Welcome to The React Quiz!</h1>
        <p>{numQuestion} question to test your React knowledge</p>
        <button>let's start</button>
    
    </>
  )
}

export default StartScreen