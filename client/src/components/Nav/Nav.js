
import React from 'react';
import  './nav.css';

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div id="animate-area" style={
      { height: 97, clear: "both", 
    backgroundColor:"transparent", 
    backgroundImage:"url('http://www.fullhdwpp.com/wp-content/uploads/Purple-Space-Cloud_www.FullHDWpp.com_.jpg')", 
    
    backgroundRepeat: "repeat-x",
    animation: "animatedBackground 30s linear infinite",
    borderColor: "#040009"  }}
  
    className="container-fluid">
    <div className="navbar-header">
      <div>  
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/entry/:user" className="navbar-brand">
       Through The Telescope
        </a>
      </div>
       </div>   
       </div>
  </nav> 
);

export default Nav;
