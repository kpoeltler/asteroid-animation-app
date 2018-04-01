import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Observations from "./pages/Observations";
import Nav from "./components/Nav";
import Animation from "./pages/Animation";
import  './index.css';
import './main.css';


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        
        <Route exact path="/Observations" component={Observations} />
        <Route exact path="/Observations/Animation" component={Animation} />  
       
        
      </Switch>
    </div>
  </Router>;

export default App;
