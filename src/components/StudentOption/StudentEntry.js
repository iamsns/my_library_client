import React from 'react'
import login_logo from "../images/login_logo.png"
import signup_logo from "../images/register_logo2.jpg"
const StudentEntry = () => {
    return (
        <div className = "student_entry_main_div" >
           <div className="student_entry_option" >
           <img src={login_logo} />
           <a className="form-submit"  href="/studentlogin">Login</a>
           </div>
          <div className="student_entry_option">
           <img src={signup_logo} />
          <a className="form-submit"  href="/studentsignup">Register</a>
           </div>
          </div>
    )
}

export default StudentEntry
