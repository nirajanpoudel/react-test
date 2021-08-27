import React, { useState,useEffect } from 'react';
import axios from './axios.js'
import {Counter} from './Counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

export function Parent(props) {
  const [name,setName]= useState(123)

  const updateName=()=>{
    setName("react-router-dom")
  }
  return (
    <div>
     
    </div>
    );
}