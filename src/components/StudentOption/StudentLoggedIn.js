import React, { useState, useEffect } from 'react'

const StudentLoggedIn = () => {

    const [studentDetails, setStudentDetails] = useState({})
    const fun = async () => {
        try {
            const authRes = await fetch("/studentloggedin", {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const authData = await authRes.json()
            setStudentDetails(authData)
        } catch (err) {
            window.alert("server not respond")
        }
    }
    useEffect(() => {
        fun()
    }, [])



    return (
        <div>
            <div className="student_home_main_div" >
                <h1>Hello! {studentDetails.name}</h1>
                <p>As you are student you can see available books, issued books to you and you can edit your details</p>
                <h5>Options Available For You  </h5>
                <div>
                    <div className="admin_option" ><button><a href="/books">Available Books</a></button></div>
                    <div className="admin_option" ><button><a href="/yourbooks">View Issued Books</a></button></div>
                </div>
            </div>
        </div>
    )
}

export default StudentLoggedIn
