import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"
// import {NavLink} from 'react-router-dom'

const IssueBook = () => {
    const history = useHistory()

    const callIssuedBook = async ()=>{

        try{
            const authRes = await fetch("/issuebooks", {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })

            const  authData = await authRes.json()
            console.log(authData);
        }
        catch(err){
            history.push("/adminlogin")
        }

    }

    useEffect(() => {
        callIssuedBook()
    }, [])

    const [issueItems, setIssueItems] = useState({
        student_name : "",
        student_roll : "",
        book_name : "",
        author_name : "",
        book_id : ""
    })

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setIssueItems({...issueItems, [name] : value})
    }

    const handleClick = async (e)=>{
        e.preventDefault()
        const { student_name, student_roll, book_name, author_name, book_id } = issueItems

        const res = await fetch("/issuebooks", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                student_name, student_roll, book_name, author_name, book_id
            })
        })

        const data = await res.json()
        console.log(data);

        if(data.status===400){
            window.alert("book is not available")
        }else if(data.status===401){
          window.alert("Student Not Registered")
          history.push("/adminloggedin")
        } else if(data.status===402){
            window.alert("Student already have this books")
            history.push("/adminloggedin")
        }
        else if(data.status===500){
            window.alert("Book successfully issued")
        }
    }

    return <>
    <section className="admin_form_section">
                    <h2 className="admin_form_title">Issue Book</h2>
        <div className="admin_form_div">
            {/* <div className="signup-content">
                <div className="signup-form"> */}
                    <form method="POST" className="_admin_register_form" id="register-form">

                    <div className="form-group">
                            <label htmlFor="student_name">
                                <i className="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="student_name" id="student_name" value={issueItems.student_name} 
                            onChange={handleChange} placeholder="Student Name" autoComplete="off"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="student_roll">
                                <i className="zmdi zmdi-pin-account material-icons-name"></i>
                            </label>
                            <input type="text" name="student_roll" id="student_roll"  value={issueItems.student_roll} 
                            onChange={handleChange}  placeholder="Roll No" autoComplete="off"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="book_name">
                                <i className="zmdi zmdi-book material-icons-name"></i>
                            </label>
                            <input type="text" name="book_name" id="book_name" value={issueItems.book_name}                          onChange={handleChange} placeholder="Book Name" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author_name">
                                <i className="zmdi zmdi-account-o material-icons-name"></i>
                            </label>
                            <input type="text" name="author_name" id="author_name" value={issueItems.author_name} 
                            onChange={handleChange}  placeholder="Auther Name" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="book_id">
                                <i className="zmdi zmdi-confirmation-number material-icons-name"></i>
                            </label>
                            <input type="number" name="book_id" id="book_id"  value={issueItems.book_id} 
                            onChange={handleChange} placeholder="Book Id" autoComplete="off" />
                        </div>
                  
                        <div className="form-button">
                            <input type="submit" name="issue" id="issue" onClick={handleClick} className="form-submit" value="Issue" />
                        </div>
                    </form>
                </div>
            {/* </div>
        </div> */}
    </section>
</>
}

export default IssueBook
