import ReactDOM from 'react-dom';
import React, { useState,useContext,useEffect,useReducer } from 'react';
import axios from './axios.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

const initialState = {
  isLoaded:true,
  error:"",
  items:[]
}
const reducer = (state,action)=>{
  console.log(action)
  if(action.type=='SUCCESS'){
    
     return {
      ...state,
  isLoaded:true,
  error:"",
  items:action.data
};
  }
  if(action.type=='ERROR'){
    return {
      ...state,
    isLoaded:true,
    error:"error",
    items:[]
  };
  }

  // return initialState;

  return initialState;

}

export function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function listUsers(){
      axios.get("users")
      .then(
        (result) => {
          
          dispatch({type:'SUCCESS',data:result.data})

        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
          dispatch({type:'ERROR'})
        }
      )
  }
  useEffect(() => {
    listUsers();
  }, [])

  if (state.error) {
    return <div>Error: {state.error}</div>;
  } else if (!state.isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table className='table'>

        {state.items.map(item => (
          <tr>
          <td>
            {item.name} {item.price}
          </td>
          <td>{item.email}</td>
          <td><Link to={'/dashboard/users/'+item.id}>{item.name}</Link></td>
          </tr>
        ))}
      </table>
    );
  }
}