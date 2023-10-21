import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
  const { name, path } = item;
  return (
    <nav>
      <ul>
        <li className='hover:text-orange-500'>
          <Link to={path}>{name}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavItem;