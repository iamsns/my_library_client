import { React, useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const AddBooks = () => {
    const history = useHistory()

    // Authentication

    const callAddBooks = async () => {

      try {
        const authRes = await fetch("/addbooks", {
            method : "GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        })

        const authData = await authRes.json()
        console.log(authData);
    } catch(err){
        history.push("/adminlogin")
    }
      }


    useEffect(() => {
        callAddBooks()
    }, [])

    //-------------------- post data-------------------

    const [books, setBooks] = useState({
        bookName: "", authorName: "", bookId: "", quantity: ""
    });

    let name, value;

    const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;

        setBooks({ ...books, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { bookName, authorName, bookId, quantity } = books;

        const res = await fetch("/addbooks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                bookName, authorName, bookId, quantity
            })
        });

        const data = await res.json();
        if (data.status === 401) {
            window.alert("Fill data correctely")
            // history.push("/adminloggedin");
        } else if (data.status === 402) {
            window.alert("New Book Added")
            history.push("/adminloggedin");
        } else if (data.status === 403) {
            window.alert("Book Quantity Updated")
            history.push("/adminloggedin");
        }
        // else if(data.status===500){
        //     window.alert("New Admin Added")
        //     history.push("/adminloggedin");
        // } else{
        //     window.alert("server not respond")
        // }
    };


    return <>
        <section className="admin_form_section">
                        <h2 className="admin_form_title">Add Book to Library</h2>
            <div className="admin_form_div">
                {/* <div className="signup-content">
                    <div className="signup-form"> */}
                        <form method="POST" className="_admin_register_form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="bookName">
                                    <i className="zmdi zmdi-book material-icons-name"></i>
                                </label>
                                <input type="text" name="bookName" id="bookName" value={books.bookName} onChange={handleChange} placeholder="Book Name" autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="authorName">
                                    <i className="zmdi zmdi-account-o material-icons-name"></i>
                                </label>
                                <input type="text" name="authorName" id="authorName" placeholder="Auther Name" value={books.authorName} onChange={handleChange} autoComplete="off" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookId">
                                    <i className="zmdi zmdi-confirmation-number material-icons-name"></i>
                                </label>
                                <input type="number" name="bookId" id="bookId" placeholder="Book Id" value={books.bookId} onChange={handleChange} autoComplete="off" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantity">
                                    <i className="zmdi zmdi-storage material-icons-name"></i>
                                </label>
                                <input type="number" name="quantity" id="quantity" value={books.quantity} onChange={handleChange} placeholder="Number of Book" autoComplete="off" />
                            </div>
                            {/* <div className="form-group">
                       <select id="category" name="category" onChange={handleChange} >
                        <option value="engineering">Engineering</option>
                     <option value="commerce">Commerce</option>
                      <option value="arts">Arts</option>
                      <option value="architecture">Architecture</option>
                 </select>
                        </div> */}
                            <div className="form-button">
                                <input type="submit" name="add" id="add" onClick={handleSubmit} className="form-submit" value="Add" />
                            </div>
                        </form>
                    {/* </div>
                </div> */}
            </div>
        </section>
    </>
}

export default AddBooks