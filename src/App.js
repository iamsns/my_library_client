import React from "react";
import {Route} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import StudentNavbar from "./components/StudentOption/StudentNavbar";
import YourBooks from "./components/StudentOption/YourBooks";
import AdminNavbar from "./components/AdminOption/AdminNavbar";
import Home from "./components/Home";
import StudentSignup from "./components/StudentOption/StudentSignup";
import StudentEntry from "./components/StudentOption/StudentEntry";
import AdminLogin from "./components/AdminOption/AdminLogin";
import AdminLogout from "./components/AdminOption/AdminLogout";
import StudentLogout from "./components/StudentOption/StudentLogout";
import StudentLogin from "./components/StudentOption/StudentLogin";
import StudentLoggedIn from "./components/StudentOption/StudentLoggedIn";
import AdminLoggedIn from "./components/AdminOption/AdminLoggedIn";
import AddBooks from "./components/AdminOption/AddBooks";
import ViewBooks from "./components/AdminOption/ViewBooks";
import ViewStudents from "./components/AdminOption/ViewStudents";
import IssueBook from "./components/AdminOption/IssueBook";
import Books from "./components/Books";
import AddAdmin from "./components/AdminOption/AddAdmin";
import Header from "./components/Header"

const App = () =>{
  return <div>
    <Route exact path="/">
    <Navbar />
    <Home />
    </Route>
    <Route path="/student">
    <Navbar />
    <StudentEntry />
    </Route>
    <Route path="/studentsignup">
    <Navbar />
    <StudentSignup />
    </Route>
    <Route path="/studentlogin">
    <Navbar />
    <StudentLogin />
    </Route>
    <Route path="/studentloggedin">
    <StudentNavbar />
    <Header />
    <StudentLoggedIn />
    </Route>
    <Route path="/studentnav">
    <StudentNavbar />
    </Route>
    <Route path="/adminloggedin">
    <AdminNavbar />
    <AdminLoggedIn />
    </Route>
    <Route path="/addadmin">
    <AdminNavbar />
    <AddAdmin />
    </Route>
    <Route path="/addbooks">
    <AdminNavbar />
    <AddBooks />
    </Route>
    <Route path="/viewbooks">
    <AdminNavbar />
    <ViewBooks />
    </Route>
    <Route path="/viewstudents">
    <AdminNavbar />
    <ViewStudents />
    </Route>
    <Route path="/issuebooks">
    <AdminNavbar />
    <IssueBook />
    </Route>
    <Route path="/adminlogin">
    <Navbar />
    <AdminLogin />
    </Route>
    <Route path="/adminlogout">
    <Navbar />
    <AdminLogout />
    </Route>
    <Route path="/studentlogout">
    <Navbar />
    <StudentLogout />
    </Route>
    <Route path="/books">
    <StudentNavbar />
    <Books />
    </Route>
    <Route path="/yourbooks">
    <StudentNavbar />
    <YourBooks />
    </Route>
  </div>
}

export default App;
