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

export class TaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post('todos', {
    title: this.state.value,
    body: 'bar',
    userId: 1,
  }
)
  // .then((response) => response.json())
  .then((json) => console.log(json.data));
  event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

