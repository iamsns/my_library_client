import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import signup from "../images/signup.jpg"


const StudentSignup = () => {

    const history  = useHistory();
    const [user, setUser] = useState({
        name:"", roll_no:"", branch:"", dob:"", password:"",cpassword:""
    });

    let name, value;

    const handleInputs =(event)=>{
        name=event.target.name;
        value = event.target.value;

        // event.preventDefault();
        setUser({...user, [name]:value});
    }

    const postData = async (e) =>{
        e.preventDefault();
        const { name,  roll_no,  branch,  dob,  password, cpassword } = user;

        const res = await fetch("/studentsignup", {
            method: "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,  roll_no,  branch,  dob,  password, cpassword
            })
        });
        const data = await res.json();

        if(data.status === 400){
            window.alert("User already exist")
            history.push("/studentlogin")
        }else if(data.status===422) {
            window.alert("fill data correctly")
        }else if(data.status === 423){
            window.alert("both password not matched")
        }else if(data.status===500){
            window.alert("registration success")
            history.push("/studentlogin")

        }
    };



    return <>
        <section className="signup">
            <div className="container mt-5">
         <div className="signup_second_div">
            <h2 align="center" className="form-title">Sign up</h2>
         <div className="signup-content">
                    <div className="signup-form">
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input className="any_name" type="text" name="name" id="name" placeholder="Your Name" autoComplete="off"   value={user.name} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="roll_no">
                                    <i className="zmdi zmdi-pin-account material-icons-name"></i>
                                </label>
                                <input className="roll_no" type="text" name="roll_no" id="roll_no" placeholder="Your Roll No." pattern="[A-Z]"autoComplete="off" value={user.roll_no} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="branch">
                                    <i className="zmdi zmdi-book material-icons-name"></i>
                                </label>
                                <input type="text" name="branch" id="branch" placeholder="Your Branch" autoComplete="off" value={user.branch} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">
                                    <i className="zmdi zmdi-calendar material-icons-name"></i>
                                </label>
                                <input type="date" name="dob" id="dob" placeholder="Date Of birth" autoComplete="off" value={user.dob} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" placeholder="Your Password" autoComplete="off" value={user.password} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Your Password" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                            </div>
                            <div className="form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={postData} />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                    <figure>
                    <img src={signup} alt="this is not available this time" />
                    </figure>
                    <NavLink to="/studentlogin" className="signin-image-link" >I am already registered</NavLink>
                    </div>
                </div>
         </div>
            </div>
        </section>
    </>
}

export default StudentSignup