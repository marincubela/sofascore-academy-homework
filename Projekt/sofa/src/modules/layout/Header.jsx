import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/App.css";

export function Header() {
  return (
    <header className="header">
      <NavLink exact to="/">
        <h1>SofaScore</h1>
      </NavLink>
    </header>
  );
}
