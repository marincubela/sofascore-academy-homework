import React from "react";
import { NavLink } from "react-router-dom";

export function SportHeader() {
  return (
    <div className="sport-header">
      <NavLink exact to="/football">
        <span className="sport">Nogomet</span>
      </NavLink>
      <NavLink exact to="/basketball">
        <span className="sport">Košarka</span>
      </NavLink>
      <NavLink exact to="/tennis">
        <span className="sport">Tenis</span>
      </NavLink>
      <NavLink exact to="/handball">
        <span className="sport">Rukomet</span>
      </NavLink>
    </div>
  );
}
