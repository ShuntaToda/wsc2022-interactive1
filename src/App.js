
import { useEffect, useState } from 'react';
import './App.css';
import MainActivityArea from './components/mainActivityArea/MainActivityArea';
import { MovingArea } from './components/movingArea/MovingArea';
import { seens } from './data/seen';
import { useField } from './hooks/useField';
import { usePlayer } from './hooks/usePlayer';
import { Player } from './class/Player';
import { useQuiz } from './hooks/useQuiz';
import { FullScreenBtn } from './components/FullScreenBtn';

function App() {
  const { field, setField, checkDirection, movePlayer, checkQuizBarrier, removeBarrier, checkNextSeen } = useField(seens[0])
  const { player, setPlayer } = usePlayer(new Player(0, 0))
  const { quiz, setQuiz } = useQuiz()
  const [seenNum, setSeenNum] = useState(0)

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (checkDirection(player.x, player.y, "top") === "space") {
        movePlayer(player.x, player.y - 1)
        setPlayer(new Player(player.x, player.y - 1))
      }
    } else if (e.key === "ArrowDown") {
      if (checkDirection(player.x, player.y, "bottom") === "space") {
        movePlayer(player.x, player.y + 1)
        setPlayer(new Player(player.x, player.y + 1))
      }
    } else if (e.key === "ArrowRight") {
      if (checkDirection(player.x, player.y, "right") === "space") {
        movePlayer(player.x + 1, player.y)
        setPlayer(new Player(player.x + 1, player.y))
      }
    } else if (e.key === "ArrowLeft") {
      if (checkDirection(player.x, player.y, "left") === "space") {
        movePlayer(player.x - 1, player.y)
        setPlayer(new Player(player.x - 1, player.y))
      }
    }
  }

  const handleQuiz = (quiz) => {
    setQuiz(quiz)
    console.log(quiz)
  }



  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    if (checkQuizBarrier()) {
      handleQuiz(checkQuizBarrier())
    }
    if (checkNextSeen()) {
      // 本来ならここで＋1
      // setSeenNum(seenNum + 1)
    }

    return () => { document.removeEventListener("keydown", handleKeyDown) }
  }, [field, player])

  useEffect(() => {
    console.log(field)
  }, [field])
  return (
    <div className="App pt-5 bg-white">
      <MainActivityArea setQuiz={setQuiz} removeBarrier={removeBarrier} quiz={quiz}></MainActivityArea>
      <MovingArea field={field} setPlayer={setPlayer} movePlayer={movePlayer}></MovingArea>
      <FullScreenBtn></FullScreenBtn>
    </div>
  );
}

export default App;
