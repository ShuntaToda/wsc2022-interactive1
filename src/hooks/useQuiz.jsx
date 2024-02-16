import { useState } from "react"

export const useQuiz = (initQuiz) => {
  const [quiz, setQuiz] = useState(initQuiz ?? null)

  return { quiz, setQuiz }
}