import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import signin from "../images/signin1.jpg"


const StudentLogin = () =>{

    const history = useHistory();
    const [roll_no, setRoll_no]= useState("");
    const [password, setPassword]= useState("");

    const studentLogin = async (e) =>{
        e.preventDefault();

        const res = await fetch('/studentlogin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                roll_no, password
            })
        });

        const data = res.json();
        console.log(data);

        if(res.status===401) {
            window.alert(" invalid pass")
        } else if(res.status===400 || !data){
            window.alert("invalid data")
        } else if(res.status===402) {
            window.alert(" invalid roll no")
        } else if(res.status===503) {
            window.alert(" unavailable server")
        } else{
            window.alert(" login successfully")
            history.push("/studentloggedin")
        }
    }

    return <>
         <section className="sign-in">
            <div className="container mt-5">
                <div className="signup_second_div signin_div">
                        <h2 className="form-title">Student Login</h2>
                <div className="signin-content">
                     <div className="signin-image">
                    <figure>
                    <img src={signin} alt="this is not available this time" />
                    </figure>
                    don't have an account? <NavLink to="/studentsignup" className="signup-image-link" >Register</NavLink>
                    </div>
                    <div className="signin-form">
                        <form methos="POST" className="register-form" id="register-form">
                         
                            <div className="form-group">
                                <label htmlFor="roll_no">
                                    <i class="zmdi zmdi-pin-account material-icons-name"></i>
                                </label>
                                <input type="text" name="roll_no" id="roll_no" value={roll_no} onChange={(e)=>setRoll_no(e.target.value)} placeholder="Enter Roll No." autoComplete="off" />
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" autoComplete="off" />
                            </div>
                            
                            <div className="form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Login" onClick={studentLogin} />
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
}

export default StudentLogin