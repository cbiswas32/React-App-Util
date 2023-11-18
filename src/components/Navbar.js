import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar({title, currentMode, handleToggleMode}) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${currentMode==='light'?'dark':'light'}`} data-bs-theme={currentMode==='light'?'dark':''}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subscribe">Subscribe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/unlimitednews">Unlimited News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plusminus">Redux Demo</Link>
              </li>
            </ul>
            <form className="d-flex">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleToggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={currentMode==='light'?{color:  '#fff'}: { color: '#343a40'}}>Dark Mode</label>
            </div>
            </form>
          </div>
        </div>
      </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string,
    currentMode: PropTypes.string,
    handleToggleMode: PropTypes.func

}


Navbar.defaultProps = {
    title: 'Chinmoy'
}

