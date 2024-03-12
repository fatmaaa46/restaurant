import React from 'react';
import { Login } from '../../components/DropDown/Login';

function DropDownMenu(): React.JSX.Element {


  return (
    <nav className="navbar mt-4 mb-3 mx-5 position-absolute fixed-top ">
      <div className="container-fluid">
        <div></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Login />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DropDownMenu;