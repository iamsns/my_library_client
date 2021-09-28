import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">My Library</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/books">Books</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/student">Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="adminlogin">Admin</NavLink>
         </li>
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
}

export default Navbar