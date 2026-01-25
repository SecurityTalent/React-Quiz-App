import React from 'react'

function Option({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          key={index}
          onClick={() =>
            dispatch({ type: 'newAnswer', payload: index })
          }
          disabled={hasAnswered}
          className={`btn btn-option
            ${index === answer ? 'answer' : ''}
            ${
              hasAnswered
                ? index === questions.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Option
