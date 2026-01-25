import React from 'react'

function StartScreen({ numQuestion }) {
  return (
    <>
      <div>
        <h1>Welcome to The React Quiz!</h1>
        <h3>{numQuestion} question to test your React knowledge</h3>
        <button className='btn btn-button'>let's start</button>
      </div>

    </>
  )
}

export default StartScreen