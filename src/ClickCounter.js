import logo from './logo.svg';
import './App.css';
import Hoc from './Hoc'
import ReactDOM from 'react-dom';
import React, { useState,useContext,useReducer } from 'react';



function ClickCounter() {
    let [count,setCount] = useState(0);
  return (
    <>
     <p>You clicked {count} times</p>
      <button onMouseOver={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}


export default Hoc(ClickCounter);