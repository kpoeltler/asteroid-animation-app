import React, { Component } from "react";
import "../../main.css";





function handleClick() {
    alert('You have clicked on me');
  }
  
  const panelInstance = (
    <Panel onClick={handleClick}>
      <Panel.Body>Basic panel example</Panel.Body>
    </Panel>
  );


const Panel = () => (
    
 <div>
  <Panel>
    <Panel.Heading>Panel heading without a title</Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
  <Panel>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Panel content</Panel.Body>
  </Panel>
</div>
)


export default Panel;