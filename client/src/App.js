import React from 'react';
import './App.css';
import BookDisplay from "./components/booksDisplay";
import BooksForm from "./components/booksForm";
import axios from "axios";

function App(props) {


  const getBooks = () => {
console.log("Its is active")
axios
.get('http://localhost:4000/api/books')
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

}

  return (
    <div className="App">
    <h1>Books API Project</h1>
    <BookDisplay name={"Dapper"} />
    <BooksForm name={"Dapper"} getBooksBtn={getBooks} />
    </div>
  );
}

export default App;
