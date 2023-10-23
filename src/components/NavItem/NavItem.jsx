import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item }) => {
  const { name, path } = item;

  return (
    <nav>
      <ul>
        <NavLink className="hover:text-orange-500" to={path}>
          {name}
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavItem; 