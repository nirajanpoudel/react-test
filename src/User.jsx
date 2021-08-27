import React, { useState,useEffect } from 'react';
import axios from './axios.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

export function User(props) {
  let { userId } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    console.warn(userId)
    axios.get("users/"+userId)
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='table'>
      namaster
      {item.name}
      <br />
      {item.email}
       
      </div>
      
      
    );
  }
}