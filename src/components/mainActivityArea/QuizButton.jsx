import React from 'react'

export const QuizButton = ({ item, index, quiz, answerQuiz }) => {
  const handleClick = () => {
    if (quiz.quiz.answerIndex === index) {
      console.log(quiz)
      answerQuiz(quiz.id)
    }
  }
  return (
    <div onClick={handleClick} className='btn btn-outline-primary'>{item}</div>
  )
}
