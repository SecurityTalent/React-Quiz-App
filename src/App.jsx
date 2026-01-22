import React, { useEffect, useReducer } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Loader from './component/Loader';
import Error from './component/Error';
import StartScreen from './component/StartScreen';
import Question from './component/Question';


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

  const numQuestion = state.questions.length
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
        {state.status === 'loading' && <Loader/>}
        {state.status === 'error' && <Error/>}
        {state.status === 'ready' && <StartScreen numQuestion ={numQuestion}/>}
        {status === 'active' && <Question />}


      </Main>



    </>
  )
}

export default App