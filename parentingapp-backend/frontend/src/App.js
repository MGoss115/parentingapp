import { React, useState, useEffect } from 'react';
import './App.css';
import ShowKids from './Components/ShowKids';
import AddKid from './Components/AddKid';
import NavBarMenu from './Components/NavBarMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import KidDetail from './Components/KidDetail';
import KidUpdate from './Components/KidUpdate';


function App() {


 
  return (
    <div>
      <Router>
        <NavBarMenu />
        <Switch>
          <Route exact path="/" component={ShowKids} />
          <Route exact path="/addkid" component={AddKid} />
          <Route exact path="/:id/" component={KidDetail} />
          <Route exact path="/:id/update" component={KidUpdate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
