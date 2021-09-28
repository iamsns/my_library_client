// eslint-disable-next-line react-hooks/exhaustive-deps
import { React, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'

const ViewStudents = () => {

    const [list, setList] = useState([])
    const history = useHistory()

    const callViewStudents = async ()=>{
        try{
            const res = await fetch("/viewstudents", {
                method : "GET",
                headers : {
                    accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            })
       
            const data = await res.json()
            console.log(data);
       
            setList(data.studentList)
        }catch(err){
            history.push("/adminlogin")
        }
    }

   useEffect(() => {
   callViewStudents()
   }, [])
    return (
        <div className="view_student_div">
        <h1>Student Registered</h1>
            <table className="table " >
            <thead>
                <tr>
                <th>S.No.</th>
                <th>Student Name</th>
                <th>Roll No.</th>
                <th>Branch</th>
                <th>Date Of Birth</th>
                <th>Book Issued</th>
                </tr>
            </thead>
            <tbody>
                {list.map((value, index)=>{
                   return <tr key={index}>
                   <td>{index+1}</td>
                    <td>{value.name}</td>
                    <td>{value.roll_no}</td>
                    <td>{value.branch}</td>
                    <td>{value.dob}</td>
                    <td>{value.book_issued.length}</td>
                    </tr>
                })}
            </tbody>
            </table>
        </div>
    )
}

export default ViewStudents
