import React from 'react';
import './styles.css';
import { Task } from './task';

export function TaskPage({ input: { first, second, result}, setDone }: { input: Task, setDone: (t: boolean) => void }) {

  const isCorrect = (value: string) => parseInt(value) === result

  return (
    <>
      <div className="flex-container row">
        <div className="flex-item">{first}</div>
        <div className="flex-item">+</div>
        <div className="flex-item">{second}</div>
        <div className="flex-item">=</div>
        <input className="flex-item color-0" type="text" onChange={
          (event) => {
            if (isCorrect(event.target.value)) {
              setDone(true);
            }
          }}
        />
      </div>
      {false && <div className="flex-container row">
        <button className="flex-item button" value="valmis" onClick={() => {

        }} >
          TARKISTA
        </button>
      </div>
      }
    </>
  );
}
