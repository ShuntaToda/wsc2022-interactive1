import React from 'react'
import { Player } from './Player'
import { Space } from './Space'
import { QuizBarrier } from './QuizBarrier'

export const MovingArea = ({ field, setPlayer, movePlayer }) => {
  const width = 800
  const height = 400
  return (
    <div className='d-flex justify-content-center mt-4'>
      <div style={{ width: `${width}px`, height: `${height}px` }} className='border rounded'>
        {field.map((row, i) => (
          <div key={i} className='d-flex fade-in'>
            {row.map((item, j) => {
              if (item.type == "player") {
                return <Player width={width / 12} height={height / 5} i={i} j={j}></Player>
              } else if (item.type == "space") {
                return <Space width={width / 12} height={height / 5} i={i} j={j} setPlayer={setPlayer} movePlayer={movePlayer}></Space>
              } else if (item.type == "barrier") {
                return <QuizBarrier width={width / 12} height={height / 5} i={i} j={j}></QuizBarrier>
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
