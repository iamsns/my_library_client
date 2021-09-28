import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const YourBooks = () => {
    const [studentDetails, setStudentDetails] = useState({})
    const [boooks, setBoooks] = useState([])
    const history = useHistory()
    const callyourBooks = async () => {
        try {
            const authRes = await fetch("/yourbooks", {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const authData = await authRes.json()
            setStudentDetails(authData)
            if (authData.status === 500) {
                setBoooks(authData.books)
                console.log(studentDetails.name);
            }
        } catch (err) {
            history.push("/studentloggedin")
        }
    }
    useEffect(() => {
        callyourBooks()
    }, [])

    if (studentDetails.status === 500) {
        return (
            <div className="student_issued_books_main_div">
                <h1>Your Issued Books</h1>
                    <div className="table_inner_div">
                        <table className="table">
                            <thead >
                                <tr>  <th>S.No.</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Book Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {boooks.map((value, index) => {
                                    return <tr key={index} >

                                        <td>{index + 1}</td>
                                        <td>{value.book_name}</td>
                                        <td>{value.author_name}</td>
                                        <td>{value.book_id}</td>
                                        {/* <button className="btn">Return</button> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    } else {
        return (<div>
            <h1>Your Issued Books</h1>
            <h2>You have no book issued</h2>
        </div>)
    }
}

export default YourBooks
