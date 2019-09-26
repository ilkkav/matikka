import React, { useState } from 'react';
import './styles.css';
import unicorn from './unicorn.jpg';

export function TaskRow({ input }) {

  const [arvo, setValue] = useState('');
  const showImage = parseInt(arvo) === input[2]
  return (
    <>
      <div class="flex-container row">
        <div class="flex-item">{input[0]}</div>
        <div class="flex-item">+</div>
        <div class="flex-item">{input[1]}</div>
        <div class="flex-item">=</div>
        <form class="flex-item" onSubmit={(event) => {
          setValue(event);
          event.preventDefault();
        }}>
          <label> 
            <input type="text" onChange={(event) => { setValue(event.target.value) }} />
          </label>
        </form>
        <img class="flex-item" style={{ width: 100, height: 150, padding: 0, justifySelf: 'center', visibility: showImage ? 'visible' : 'hidden' }} src={unicorn}></img>
      </div>
    </>
  )
}