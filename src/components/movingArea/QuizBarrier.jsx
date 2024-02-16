import React from 'react'

export const QuizBarrier = ({ width, height }) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className='bg-secondary fade-in'></div>
  )
}
