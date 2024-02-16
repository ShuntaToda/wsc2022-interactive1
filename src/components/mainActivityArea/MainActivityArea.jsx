import React from 'react'
import { Quiz } from './Quiz'

const MainActivityArea = ({ quiz, removeBarrier, setQuiz }) => {
  const answerQuiz = (id) => {
    removeBarrier(id)
    setQuiz(null)
  }
  return (
    <div className='d-flex justify-content-center'>
      <div style={{ height: "300px", width: "500px" }} className='border rounded'>
        {quiz && <Quiz quiz={quiz} answerQuiz={answerQuiz}></Quiz>}
      </div>
    </div>
  )
}

export default MainActivityArea