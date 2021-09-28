import React, {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom";
// import signup from "/"


const AddAdmin = () => {

    const history  = useHistory();

    //-----authentication---------------

    const callAddAdmin = async ()=>{
        try {
            const authRes = await fetch("/addadmin", {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"},
                credentials : "include"
            })
            const authData = await authRes.json()
            console.log(authData);
        }
        catch (err){
            history.push("/adminlogin")
        }
    }

    useEffect(() => {
       callAddAdmin()
    }, [])

    //-------post methos part----

    const [user, setUser] = useState({
        name:"", id:"",  dob:"", password:"",cpassword:""
    });

    let name, value;

    const handleInputs =(event)=>{
        name=event.target.name;
        value = event.target.value;

        setUser({...user, [name]:value});
    }

    const postData = async (e) =>{
        e.preventDefault();
        const { name,  id, dob,  password, cpassword } = user;

        const res = await fetch("/addadmin", {
            method: "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,  id,  dob,  password, cpassword
            })
        });
        const data = await res.json();

        if(data.status === 401){
            window.alert("Fill data correctely")
        }else if(data.status===402){
            window.alert("Both password not matched")
        }else if(data.status===403){
            window.alert("admin already exist")
            history.push("/adminloggedin");
        }else if(data.status===500){
            window.alert("New Admin Added")
            history.push("/adminloggedin");
        } else{
            window.alert("server not respond")
        }
    };

    return <>
        <section className="admin_form_section">
                        <h2 className="admin_form_title">Add New Admin</h2>
            <div className="admin_form_div ">
                {/* <div className="signup-content">
                    <div className="signup-form"> */}
                        <form method="POST" className="_admin_register_form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" placeholder="Full Name" autoComplete="off" value={user.name} onChange={handleInputs} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="id">
                                    <i className="zmdi zmdi-pin-account material-icons-name"></i>
                                </label>
                                <input type="number" name="id" id="id" placeholder="Give Id" autoComplete="off" value={user.id} onChange={handleInputs} />
                                    <i className="zmdi zmdi-date material-icons-name"></i>
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
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Add" onClick={postData} />
                            </div>
                        </form>
                    {/* </div>
                </div> */}
            </div>
        </section>
    </>
}

export default AddAdmin