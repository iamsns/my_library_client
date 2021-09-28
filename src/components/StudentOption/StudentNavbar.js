import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"

const StudentNavbar = () =>{
  const [welcomeTag, setWelcomeTag] = useState("")

const callWelcomeTag = async () =>{
  try {
    const serverRes = await fetch("/studentnav", {
      method : "GET",
      headers : {
        accept : "application/json",
        "Content-Type" : "application/json"
      },
      credentials : "include"
    })

    const serverData = await serverRes.json()
    setWelcomeTag(serverData.name)
  
  } catch (error) {
    window.alert("error in server response")
  }
}

useEffect(() => {
 callWelcomeTag()
}, [])

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">My Library</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/studentloggedin">Welcome Back <span> {welcomeTag}</span></NavLink>
        </li> 
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/studentloggedin">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/books">Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/yourbooks">Issued Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/studentlogout">Logout</NavLink>
        </li>       
      </ul>
    </div>
   
  </div>
</nav>
    </>
}

export default StudentNavbar