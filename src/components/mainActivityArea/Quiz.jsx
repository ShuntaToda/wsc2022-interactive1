import React from 'react'
import { QuizButton } from './QuizButton'

export const Quiz = ({ quiz, answerQuiz }) => {
  return (
    <div className='h-100 d-flex flex-column justify-content-around quiz'>
      <div className='text-center fs-4'>{quiz.quiz.text}</div>
      <div className='d-flex justify-content-around'>
        {quiz.quiz.choices.map((item, index) => (
          <QuizButton answerQuiz={answerQuiz} item={item} index={index} quiz={quiz}></QuizButton>
        ))}
      </div>
    </div>
  )
}
