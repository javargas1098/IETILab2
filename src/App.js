import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
//import {TodoList} from './TodoList';
import { TodoApp } from './TodoApp.js';
import { Login } from './component/Login.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const LoginView = () => (
  <Login />
);

const TodoView = () => (
  <TodoApp />
);

export default class App extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('emailDefault', "JavierV");
    localStorage.setItem('passwordDefault', "ieti");
  }

  render() {
    // const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
    //       {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
    //       {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
    return (
      //<TodoList todoList={todos} />      
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODO React App</h1>
          </header>

          <br />
          <br />

          <ul>
            {localStorage.getItem('Logged') === "true" ?
              <li><Link to="/todo">Todo</Link></li> : <li><Link to="/">Login</Link></li>
            }
          </ul>

          <div>
            {localStorage.getItem('Logged') === "true" ?
              < Route path="/todo" component={TodoView} /> : <Route exact path="/" component={LoginView} />
            }
          </div>
        </div>
      </Router>
    );
  }
}