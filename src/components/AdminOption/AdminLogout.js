import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"

const AdminLogout = () => {
    const history = useHistory()
    const callAdminLogout = async ()=>{
        try{
            const authRes = await fetch("/adminlogout", {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
            const authData = await authRes.json()
            if(authData.status===500){
                history.push("/adminlogin")
            }

        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
     callAdminLogout()
    }, [])

    return (
        <>
            <h1>This is logout page</h1>
        </>
    )
}

export default AdminLogout
