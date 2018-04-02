import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./pages/Entry";
import Nav from "./components/Nav";
import Animation from "./pages/Animation";
import  './index.css';
import './main.css';


const App = () =>
  <Router>
    <div>
      <Animation />
      <Switch>
        
        <Route exact path="/entry" component={Entry} />
        <Route exact path="/entry/Animation" component={Animation} />  
       
        
      </Switch>
    </div>
  </Router>;

export default App;
