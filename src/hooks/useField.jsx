import { useState } from "react"
import { Player } from "../class/Player"
import { Space } from "../class/Space"
export const useField = (seen) => {
  const [field, setField] = useState(() => {
    let f = []
    let row = []
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 12; j++) {
        row.push(new Space(`${i}-${j}`))
      }
      f.push(row)
      row = []
    }
    console.log(f)
    f[0][0] = new Player(0, 0)
    seen.barriers.forEach((barrier, i) => {
      f.forEach((row, rowIndex) => {
        f[rowIndex][11 - (i + 1)] = barrier
      })
    })

    return f
  })


  const checkDirection = (x, y, dir) => {
    if (dir === "top") {
      return field[y - 1] ? field[y - 1][x].type : "undefined"
    } else if (dir === "bottom") {
      return field[y + 1] ? field[y + 1][x].type : "undefined"
    } else if (dir === "right") {
      return field[y][x + 1] ? field[y][x + 1].type : "undefined"
    } else if (dir === "left") {
      return field[y][x - 1] ? field[y][x - 1].type : "undefined"
    }
  }

  const findPlayer = () => {
    let x = 0
    let y = 0

    field.forEach((row, i) => {
      row.forEach((column, j) => {
        if (column.type === "player") {
          y = i
          x = j
        }
      })
    })

    return { x, y }
  }

  const movePlayer = (moveX, moveY) => {
    const { x, y } = findPlayer()
    setField(prevField => {
      prevField[moveY][moveX] = new Player(moveX, moveY)
      prevField[y][x] = new Space(`${y}-${x}`)
      return [...prevField]
    })
  }

  const checkQuizBarrier = () => {
    const { x, y } = findPlayer()
    return checkDirection(x, y, "right") === "barrier" ? field[y][x + 1] : false
  }

  const removeBarrier = (id) => {
    field.forEach((row, i) => {
      row.forEach((item, j) => {
        if (item.type === "barrier" && item.id === id) {
          setField(prevField => {
            prevField[i][j] = new Space(`${i}-${j}`)
            return [...prevField]
          })
        }
      })
    })
  }

  const checkNextSeen = () => {
    const { x, y } = findPlayer()
    if (checkDirection(x, y, "right") === "undefined") {
      let f = []
      let row = []
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 12; j++) {
          row.push(new Space(`${i}-${j}`))
        }
        f.push(row)
        row = []
      }
      console.log(f)
      f[0][0] = new Player(0, 0)
      seen.barriers.forEach((barrier, i) => {
        f.forEach((row, rowIndex) => {
          f[rowIndex][11 - (i + 1)] = barrier
        })
      })

      setField(f)
    }
  }
  return { field, setField, checkDirection, movePlayer, checkQuizBarrier, removeBarrier, checkNextSeen }
}