import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import React, { useState,useContext,useReducer } from 'react';
import Hoc from './Hoc'



export function HoverCounter() {
    let [count,setCount] = useState(0);
  return (
    <>
     <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}


export default Hoc(HoverCounter);