import React from "react";
import { NavLink } from "react-router-dom";
import { List, Item } from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <List>
        <Item>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#f354b1" : "currentColor",
            })}>
            Home
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? "#f354b1" : "currentColor",
            })}>
            Movies
          </NavLink>
        </Item>
      </List>
    </nav>
  );
}
