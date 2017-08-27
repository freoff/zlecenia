import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu () {
    this.setState({ display: this.state.display === 'none' ? 'block' : 'none' });
  };
  printMenuItem = () => {
    const result = [];
    for (let [name, path] of this.props.menu.entries()) {
      result.push(
        <li key={Math.random()}>
          <NavLink onClick={this.toggleMenu} to={path}>
            {name}
          </NavLink>
        </li>,
      );
    }
    return result;
  };
  render() {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle" role="button" onClick={this.toggleMenu}>
          {this.props.children} <span className="carret" />
        </a>
        <ul className="dropdown-menu" style={{ display: this.state.display }}>
          {this.printMenuItem()}
        </ul>
      </li>
    );
  }
}
