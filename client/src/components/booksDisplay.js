import React from "react";


const BookDisplay = props => {
  return (
    <div>
      <h1>Booklist</h1>
        {props.books}
    </div>
  );
};

export default BookDisplay;
