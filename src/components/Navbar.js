import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ADD_FILTER } from '../actions/stock_action';
import '../css/index.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(ADD_FILTER(filter));
  };

  const showNews = () => {
    history.push("/news");
  }

  return (
    <nav className="navbar navbar-expand-lg mt-3 px-5">
      <Link to="/" className="navbar-brand mr-5" href="body">STOX</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <button className="btn-news" onClick={showNews}>News</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
