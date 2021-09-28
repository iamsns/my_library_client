import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Books = () => {
const history = useHistory()
const [bookList, setBookList] = useState([])
const [request, setRequest] = useState({
    b_name : "",
    a_name  : "",
    b_id : "",
    b_quantity : ""
})

const callBooks = async ()=>{
    try{
        const authRes = await fetch("/books", {
            method : "GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        })

        const authData = await authRes.json()
        const bookArray = authData.bookList;
        console.log(authData.bookList);
        setBookList(bookArray)

    }catch(err){
        history.push("/studentlogin")
    }
}

    useEffect(() => {
        callBooks()
    }, [])
    const handleRequest = (e)=>{
        e.preventDefault()
        // setRequest(bookList[i])
        console.log(request);

    }

    return (
        <div>
            <h1>This is book section</h1>

            <div className="main_books_div">
            
       { bookList.map((value, index)=>{
        

       return <div key={index} className="book_box" >
        {index+1}
        <div>Book Name : {value.bookName}</div>
        <div>Author Name : {value.authorName}</div>
        <div>Book Id : {value.bookId}</div>
        <div>Book Available : {value.quantity}</div>
        <button onClick = {handleRequest} >Request Now</button>
        </div>
       })}
            </div>
        </div>
    )
}
export default Books
