import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./pages/Entry";
import Detail from "./pages/Detail";

const App = () =>
  <Router>
    <div>
       <Switch>
       <Route exact path="/" component={Entry} />
        <Route exact path="/entry" component={Entry} />
        {/* <Route exact path="/entry/:id" component={Entry} />
        <Route exact path="/entry/orbit" component={Entry} />
        <Route exact path="/entry/comment" component={Entry} />
        <Route exact path="/" component={Entry} />
         <Route component={NoMatch} /> */}
       
      </Switch>  
    </div>
  </Router>;

export default App;
