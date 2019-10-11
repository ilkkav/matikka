import React, { useState } from 'react';
import './styles.css';
import { WordTask, Letter } from './task';

const removeFromArray = (c: string, source: string[]) => {
  source.splice(source.findIndex(i => i === c), 1)
  return source
}

const withStatuses = (letters: Letter[], solved: string[]) => {
  const result = [...letters]
  solved.forEach(s => {
    const indexToUpdate = result.findIndex(l => (l.c === s && l.status === 'Hidden'))
    if (indexToUpdate !== -1) {
      result[indexToUpdate].status = 'Solved'
    }
  })
  return result
}

export function WordTaskPage({ input: { letters, blanks, guessLetters }, setDone }: { input: WordTask, setDone: (t: boolean) => void }) {

  const [lettersToGuess, setLettersToGuess] = useState<string[]>([...blanks])
  const [solvedLetters, setSolvedLetters] = useState<string[]>([])

  const saveCharInput = (c: string) => {

    if (!lettersToGuess.includes(c)) {
      return //incorrect letter
    }

    setSolvedLetters([...solvedLetters, c])
    setLettersToGuess(removeFromArray(c, lettersToGuess))
    if (lettersToGuess.length === 0) {
      setTimeout(() => setDone(true), 1000)
    }
  }

  return (
    <>
      <div className="flex-container row belize">
        {withStatuses(letters, solvedLetters).map((l: Letter, i: number) => LetterBox(l, i, saveCharInput))}
      </div>
      <div className="flex-container low row">
        {guessLetters.slice(0, 4).map((l: string, i: number) => GuessLetterBox(l, i, saveCharInput, solvedLetters.includes(l)))}
      </div>
      <div className="flex-container low row">
        {guessLetters.slice(4, 8).map((l: string, i: number) => GuessLetterBox(l, i, saveCharInput, solvedLetters.includes(l)))}
      </div>
    </>)
}

function LetterBox(c: Letter, i: number, saveInput: ((s: string) => void)) {
  return (
    c.status === 'Hidden' ?
      <input key={i} className="flex-item small silver" type="text" onChange={
        (event) => {
          saveInput(event.target.value)
        }
      }
      /> :
      c.status === 'Normal' ?
        (<div key={i} className="flex-item small river">{c.c}</div>)
        :
        <div key={i} className="flex-item small emerald">{c.c}</div>
  )
}

const GuessLetterBox = (c: string, i: number, onClick: ((s: string) => void), correct: boolean = false) => {
  const name = `flex-item asphalt ${correct ? 'correct-text' : 'hollow'}`;
  return (
    <div key={i} className={name} onClick={() => { onClick(c) }} >{c}</div>)
}