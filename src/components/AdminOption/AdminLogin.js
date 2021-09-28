import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const AdminLogin = () =>{

    const history = useHistory();
    const [id, setId]= useState("");
    const [password, setPassword]= useState("");

    const userLogin = async (e) =>{
        e.preventDefault();

        const res = await fetch('/adminlogin',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                id, password
            })
        });

        const data = await res.json();
        console.log(data);

        if(data.status===401) {
            window.alert("Fill data")
        } else if(data.status===402) {
            // window.alert("token generated")
            history.push("/adminloggedin")
        } else if(data.status===403) {
            window.alert("Incorrect  password")
        } else if(data.status === 404){
            window.alert("admin not exist")
            history.push("/")
        } else{
            window.alert("Server Not Respond")
        }
    }

    return <>
         <section className="admin_login_in">
            <div className="container">
                <div className="admin_login_content">
                        <h2 className="form-title">Admin Login</h2>
                        <form methos="POST" className="admin_login_form" id="register-form">
                         
                            <div className="form-group">
                                <label htmlFor="id">
                                    <i class="zmdi zmdi-pin-account material-icons-name"></i>
                                </label>
                                <input type="text" name="id" id="id" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter Id" autoComplete="off" />
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Your Password" autoComplete="off" />
                            </div>
                            
                            <div className="form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit admin_submit" value="Login" onClick={userLogin} />
                            </div>
                        </form>
                   
                </div>
            </div>
        </section>
    </>
}

export default AdminLogin