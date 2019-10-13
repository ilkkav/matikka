
import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task, getWordTasks, WordTask } from './task';
import { TaskPage } from './TaskPage';
import { WordTaskPage } from './WordTaskPage';

const wordTasks: WordTask[] = getWordTasks()
const maxIndex = wordTasks.length;

function App() {

  const nextTask = () => {
    setDoneCount((doneCount + 1) % maxIndex);
  }

  const [showPrize, setShowPrize] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [wordGameSelected, setWordGameSelected] = useState<boolean>(true);

  const changeGame = () => {
    setWordGameSelected(!wordGameSelected)
    setShowPrize(false);
    nextTask();
  }

  return (
    <div className="App">
      <div className="header flex-item alizarin">LYYTIN LASKUPELI</div>
      {showPrize ?
        <img className="flex-item color-2 responsive-image" src={wordTasks[doneCount].image} onClick={() => {
          setShowPrize(false);
          nextTask();
        }
        }></img>
        :
        wordGameSelected ? <WordTaskPage input={wordTasks[doneCount]} setDone={() => setShowPrize(true)} />
          : <TaskPage input={task()} setDone={() => setShowPrize(true)} />
      }
      {ChangeGameButton(changeGame)}
    </div>
  );
}

function ChangeGameButton(handleClick: () => void): JSX.Element {
  return (<div className="flex-container narrow clouds">
    <button className="flex-item button small pomegranate hollow" value="valmis" onClick={() => {      
    }} >
      VAIHDA PELI
  </button>
  </div>)
}

export default App;
