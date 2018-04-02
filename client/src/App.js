import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./pages/Entry";
import Nav from "./components/Nav";
import  './index.css';
import './main.css';
import { Col, Row, Container } from "./components/Grid";
import { Input, TextArea, FormBtn } from "./components/Form";
import Detail from "./pages/Detail";

const App = () =>
  <Router>
    <div>
      <Entry />
       <Switch>
        <Route exact path="/Detail" component={Detail} /> 
      </Switch>  
    </div>
  </Router>;

export default App;
