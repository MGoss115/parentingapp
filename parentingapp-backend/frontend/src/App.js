import { React, useState, useEffect } from 'react';
import './App.css';
import ShowKids from './Components/ShowKids';
import AddKid from './Components/AddKid';
import NavBarMenu from './Components/NavBarMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import AddTodo from './Components/AddTodos';
// import Todo from './Components/Todo'
// import Kids from './Components/Kids'
import axios from 'axios'


function App() {


 
  return (
    <div>
      <Router>
        <NavBarMenu />
        <Switch>
          <Route exact path="/" component={ShowKids} />
          <Route exact path="/addkid" component={AddKid} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
