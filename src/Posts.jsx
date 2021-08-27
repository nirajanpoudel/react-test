import React, { useState,useEffect,useReducer } from 'react';
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
  posts:[]
}

const postReducer=(state,action)=>{
     if(action.type=='SUCCESS'){
       return {
        ...state,
        isLoaded:true,
        error:"",
        posts:action.data
      };
    }
    if(action.type=='ERROR'){
      return {
        ...state,
        isLoaded:true,
        error:"error",
        posts:[]
      };
    return initialState;
  }
}
export function Posts() {
   const [state, dispatch] = useReducer(postReducer, initialState);
   function listPosts(){
      axios.get("posts")
      .then(
        (result) => {
          dispatch({type:'SUCCESS',data:result.data})
        },
        (error) => {
          dispatch({type:'ERROR'})
        }
      )
  }

  useEffect(() => {
    listPosts();
  }, [])

   return (

  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
   {state.posts.map(post => (
      <div class="col d-flex align-items-start">
        <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h2>{post.title}</h2>
          {post.body}
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
       ))}
      
    </div>
    );
  
}