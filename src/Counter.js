import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import React, { useState,useContext,useReducer } from 'react';


const initialState = {count:0};

const reducer = (state,action)=>{
  console.log(action)
  if(action.type=='increment'){
    
     return {...state,count: state.count + action.value};
  }
  if(action.type=='discrement'){
    return {count: state.count - action.value};
  }

  // return initialState;

  return initialState;

}
export function Counter(name) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div>{name}</div>
      
    </>
  );
}