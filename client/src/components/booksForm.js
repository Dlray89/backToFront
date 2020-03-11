import React from "react";

const BookForm = props => {
  return (
    <div>
      <h1>Books from {props.name}</h1>

      <button onClick={props.getBooksBtn}>Get Books</button>
    </div>
  );
};
export default BookForm;
