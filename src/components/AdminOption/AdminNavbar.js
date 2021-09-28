import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, Link } from "react-router-dom"

const AdminNavbar = () => {
    return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<NavLink className="navbar-brand" to="/">iamsns</NavLink>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <NavLink className="nav-link active" aria-current="page" to="/adminloggedin">Home</NavLink>
    </li>
     <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/issuebooks">Issue Books</Link></li>
            <li><Link className="dropdown-item" to="/addbooks">Add Books</Link></li>
            <li><Link className="dropdown-item" to="/viewbooks">View Books</Link></li>
          </ul>
        </li>
     <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Other
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/viewstudents">View Students</Link></li>
            <li><Link className="dropdown-item" to="/vieworders">View Orders</Link></li>
            <li><Link className="dropdown-item" to="/addadmin">Add Admin</Link></li>
          </ul>
        </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/adminlogout">Logout</NavLink>
    </li>       
  </ul>
</div>
</div>
</nav>
</>
}

export default AdminNavbar
