
import React from 'react';
import  './nav.css';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div id="animate-area" style={
      { height: 110, width: 1200, clear: "both", 
    backgroundColor:"transparent", 
    backgroundImage:"url('https://i.pinimg.com/originals/72/b5/23/72b523b0da135a8cf43b7001c74eb72a.jpg')",
  
    animation: "animatedBackground 20s linear infinite",
    borderColor: "#040009"  }}
  
    className="container-fluid">
    <div className="navbar-header">
      <div>  
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
       Through The Telescopes at Palisades Dows Observatory
        </a>
      </div>
       </div>   
       </div>
  </nav> 
);

export default Nav;
