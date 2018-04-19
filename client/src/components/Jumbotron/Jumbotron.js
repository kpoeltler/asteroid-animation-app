import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 700, width: 1200, clear: 'both', background:'#040009',  }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
