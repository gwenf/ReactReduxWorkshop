import React from 'react';
import { NavLink } from 'react-router-dom'

const TopNav = () => {
  return (
    <nav className='navbar navbar-light bg-faded'>
      <h1 className='navbar-brand'>Fire and Ice</h1>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" exact activeStyle={{fontWeight: 'bold'}} to='/'>Page 1</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={{fontWeight: 'bold'}} to='/character/10'>Page 2</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default TopNav;
