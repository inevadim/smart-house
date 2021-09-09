import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';
export const Nav = () => {
  return (
    <div className={style.nav}>
      <NavLink to="/room1">
        <div>room1</div>
      </NavLink>
      <NavLink to="/room2">
        <div>room2</div>
      </NavLink>
      <NavLink to="/room3">
        <div>room3</div>
      </NavLink>
    </div>
  );
};
