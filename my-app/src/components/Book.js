import React from "react";

function Book(props){
    const book = props.book;
    return (        
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>
                <img src={book.image} />
            </p>
        </div>
    )
}

export default Book;