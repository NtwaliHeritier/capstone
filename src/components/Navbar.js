import React from 'react';
import '../css/index.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg mt-3 px-5">
    <a className="navbar-brand mr-5" href="body">STOX</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          News
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>

);

export default Navbar;
