/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const ViewBooks = () => {

    const [bookList, setBookList] = useState([])
    const history = useHistory()

    const callViewBook = async ()=>{
        try{
            const res = await fetch("/viewbooks", {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
    
            const data = await res.json()
            const listdata = data.bookList;
            if(data.status===401){
                window.alert("book not found")
            }
            setBookList(...bookList, listdata)
            console.log(data);

        }
        catch(err){
            history.push("/adminlogin")
        }
    }

    useEffect(()=> {
      callViewBook()
    }, [])

    return (


        <>
            <div className="view_books_main_div">
            <h1 className="admin_form_title">Available Books</h1>
           
              <table  className="table">
                    <thead >
                        <tr>
                        <th>S.No.</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Book Id</th>
                        <th>Book Available</th>
                        </tr>
                    </thead>
                    <tbody>
                      {bookList.map((datas, index)=>{ 
                       return  <tr key={index}>
                            <td>{index+1}</td>
                            <td>{datas.bookName}</td>
                            <td>{datas.authorName}</td>
                            <td>{datas.bookId}</td>
                            <td>{datas.quantity}</td>
                        </tr>
                      })
                      }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewBooks
