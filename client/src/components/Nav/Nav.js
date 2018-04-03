
import React from 'react';

import  './Nav.css';




// =======================Old code
const Nav = () => 
  
  <nav className="navbar navbar-inverse navbar-top">
    <div id="animate-area" style={
      { height: 90, clear: "both", 
    backgroundColor:"transparent", 
    backgroundImage:"url('http://ak4.picdn.net/shutterstock/videos/11058164/thumb/1.jpg')", 
    backgroundPosition: "0px 0px",
    backgroundRepeat: "repeat-x",
    animation: "animatedBackground 15s linear infinite",
    borderColor: "#040009"  }}
    
    className="container-fluid">;
      <div>
        
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <h1 style={{ color:'white', fontWeight: '900' }} >Through The Telescope</h1>
        
      </div>
       </div>   
  </nav> 


export default Nav;
