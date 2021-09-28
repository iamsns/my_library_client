// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

const AdminLoggedIn = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const callLoggedIn = async ()=>{
        try {
    const res = await fetch("/adminloggedin", {
        method : "GET",
        headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"},
            credentials : "include"
    })

    const data = await res.json()
    console.log(data);
    setName(data.name)

   } catch (err) {
        history.push("/adminlogin")
   }
}
useEffect(()=>{
    callLoggedIn()
}, [])

    return (
        <div className="admin_loggedin">
               <div><h2 className="admin_welcome">Welcome! To Online Library </h2></div>
              <div className="admin_notice">
              <h2>Hi! {name}</h2>
               <p>As you know you are admin you can add , remove , issue books</p>
               <div className="admin_option" >
               <button><a href="/addadmin">Add New Admin</a></button>
               </div>
               <div className="admin_option" >
               <button><a href="/addbooks">Add Books</a></button>
               </div>
               <div className="admin_option" >
               <button><a href="/viewbooks">View Books</a></button>
               </div>
               <div className="admin_option" >
               <button><a href="/issuebooks">Issue Book</a></button>
               </div>
               <div className="admin_option" >
               <button><a href="/viewstudents">View Students</a></button>
               </div>
               <div className="admin_option" >
               <button><a href="/vieworders">View Orders</a></button>
               </div>
           
               </div>
        </div>
    )
}

export default AdminLoggedIn
