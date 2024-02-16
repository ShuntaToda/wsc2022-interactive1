import { useState } from "react"
import { Player } from "../class/Player"

export const usePlayer = (initPlayer) => {
  const [player, setPlayer] = useState(initPlayer)

  const move = (x, y) => {

  }
  return { player, setPlayer }
}