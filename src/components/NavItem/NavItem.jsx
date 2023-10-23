import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  const { name, path } = item;

  return (
    <nav>
      <ul>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-600 underline' : ''} to={path}>
          {name}
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavItem; 