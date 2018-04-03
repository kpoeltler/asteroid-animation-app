import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", backgroundColor: "#a13e94",borderColor:"#a13e94", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
