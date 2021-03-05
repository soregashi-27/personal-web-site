import React from 'react';
import avatar from '../img/avatar.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <nav className="nav">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolios" activeClassName="active">
                Portfolios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogs" activeClassName="active">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <footer className="footer">
          <p>©︎2021 Tomo</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
