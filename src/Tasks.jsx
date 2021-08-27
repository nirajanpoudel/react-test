import ReactDOM from 'react-dom';
import React, { useState,useContext,useEffect } from 'react';
import axios from './axios.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

export function Tasks() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function listUsers(){
      axios.get("todos")
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    listUsers();
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table className='table'>

        {items.map(item => (
          <tr>
          <td>
            {item.title}
          </td>
          <td>
          <input type="checkbox" defaultChecked={item.completed} />

          </td>
         
          </tr>
        ))}
      </table>
    );
  }
}