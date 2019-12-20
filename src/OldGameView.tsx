import React, { useState } from 'react';
import './styles.css';
import { WordTask, getWordTasks, task } from './task';
import { TaskPage } from './TaskPage';
import { WordTaskPage } from './WordTaskPage';


export function OldGameView() {

  const [wordGameSelected, setWordGameSelected] = useState<boolean>(true);
  const [showPrize, setShowPrize] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const wordTasks: WordTask[] = getWordTasks()
  const maxIndex = wordTasks.length;


  const changeGame = () => {
    setWordGameSelected(!wordGameSelected)
    setShowPrize(false);
    nextTask();
  }

  const nextTask = () => {
    setDoneCount((doneCount + 1) % maxIndex);
  }

  return (
    <>
      <div className="header flex-item alizarin">LYYTIN LASKUPELI</div>
      {showPrize ?
        <img className="flex-item color-2 responsive-image" alt="kuva" src={wordTasks[doneCount].image} onClick={() => {
          setShowPrize(false);
          nextTask();
        }
        }></img>
        :
        wordGameSelected ? <WordTaskPage input={wordTasks[doneCount]} setDone={() => setShowPrize(true)} />
          : <TaskPage input={task()} setDone={() => setShowPrize(true)} />
      }
      {ChangeGameButton(changeGame)}
    </>
  )
}

function ChangeGameButton(handleClick: () => void): JSX.Element {
  return (<div className="flex-container narrow clouds">
    <button className="flex-item button small pomegranate hollow" value="valmis" onClick={handleClick} >
      VAIHDA PELI
  </button>
  </div>)
}
