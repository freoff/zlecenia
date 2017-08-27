import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

const kontrahenciMenu = new Map([
  ['Nowy', '/nowyKontrahent'],
  ['Szukaj', '/kontrahentSzukaj'],
]);

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <ul className="nav navbar-nav">
        <li className="active">
          <NavLink to="/" >START</NavLink>
        </li>
        <Dropdown menu={kontrahenciMenu}>Kontrahenci</Dropdown>

      </ul>
    </div>
  </nav>
);
export default Navbar;
