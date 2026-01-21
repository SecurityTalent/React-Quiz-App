import React, { useEffect, useReducer } from 'react'
import Header from './component/Header'
import Main from './component/Main'


const initialState = {
  questions: [],
  // lodding, error, ready, active, finished
  status: 'loading'

}

function reducer(state, action) {
  switch (action.type) {
    case 'dataResived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      };
      case 'dataFaild':
        return{
          ...state,
          status: 'error'
        }

    default:
      throw new Error('action Unkonon')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function () {
    fetch('http://localhost:8080/questions')
      .then(res => res.json()
        .then((data) => dispatch({ type: 'dataResived', payload: data })))
      .catch((err) => dispatch({type: 'dataFaild'}))
  }, [])



  return (
    <>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question ?</p>
      </Main>



    </>
  )
}

export default App