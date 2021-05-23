import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

export function Header() {
  return (
    <header className="header">
      <NavLink exact to="/">
        <h1>SOFA</h1>
      </NavLink>
    </header>
  );
}
