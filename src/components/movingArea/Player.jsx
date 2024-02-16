import React from 'react'

export const Player = ({ width, height }) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className='bg-danger rounded fade-in'></div>
  )
}
