import React from 'react'
import { Player } from '../../class/Player'

export const Space = ({ width, height, i, j, setPlayer, movePlayer }) => {
  const handleClick = () => {
    movePlayer(j, i)
    setPlayer(new Player(j, i))
  }
  return (
    <div onClick={handleClick} style={{ width: `${width}px`, height: `${height}px` }}></div>
  )
}
