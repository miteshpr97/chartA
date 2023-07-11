import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active" style={{ marginLeft: '10px', paddingLeft: '10px' }}>
            <a className="nav-link fs-4 text" href="/">Home</a>
          </li>
          <li className="nav-item" style={{ marginLeft: '10px', paddingLeft: '10px' }}>
            <a className="nav-link fs-4 text" href="/about">Sync</a>
          </li>
          <li className="nav-item" style={{ marginLeft: '10px', paddingLeft: '10px' }}>
            <a className="nav-link fs-4 text" href="/contact">Pause</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
