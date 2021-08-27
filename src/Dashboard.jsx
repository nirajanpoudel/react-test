import ReactDOM from 'react-dom';
import React, { useState,useContext,useEffect } from 'react';
import {Users} from './Users';
import {Tasks} from './Tasks';
import {TaskCreate} from './TaskCreate';
import {Counter} from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import {Parent} from './Parent';
import {ThemeContext} from './App';
import {User} from './User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Link
} from "react-router-dom";

export function Dashboard() {
  let { path, url } = useRouteMatch();
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/dashboard/users">{theme}Rendering with Users</Link>
        </li>
        <li>
          <Link to="/dashboard/tasks">Rendering with todos</Link>
        </li>
      </ul>

      <Switch>
        
        <Route exact path="/dashboard">
          <h3>Mine test select a topic.</h3>
         
        </Route>
        <Route exact path="/dashboard/users">
          <Users />
        </Route>
        <Route exact path="/dashboard/tasks">
          <Tasks />
        </Route>
        <Route exact path="/dashboard/tasks/create">
          <TaskCreate />
        </Route>
         <Route  path="/dashboard/users/:userId">
          <User />
        </Route>
      </Switch>
    </div>
  );
}