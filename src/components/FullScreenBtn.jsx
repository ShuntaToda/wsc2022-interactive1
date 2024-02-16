import React, { useState } from 'react'

export const FullScreenBtn = () => {
  const [flag, setFlag] = useState(false)
  const handleClick = () => {
    const app = document.querySelector(".App")
    if (flag) {
      document.exitFullscreen()
      setFlag(false)
    } else {
      app.requestFullscreen()
      setFlag(true)
    }
  }
  return (
    <div onClick={handleClick} className='btn btn-secondary'>FullScreenBtn</div>
  )
}