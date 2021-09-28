import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"

const StudentLogout = () => {
    const history = useHistory()
    const callStudentLogout = async ()=>{
        try{
            const authRes = await fetch("/studentlogout", {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
            const authData = await authRes.json()
            if(authData.status===200){
                history.push("/studentlogin")
            }

        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
     callStudentLogout()
    }, [])

    return (
        <>
            <h1>This is logout page</h1>
        </>
    )
}

export default StudentLogout
