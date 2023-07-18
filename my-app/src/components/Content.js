import React from "react";
import imgClient from "./img/the_client.jpg";
import imgFirm from "./img/the_firm.jpg";
import imgTimeToKill from "./img/time_to_kill.jpg";
import Book from "./Book";

function Content(props){
    const books = [
        {
            title: "The Client",
            author: "John Grisham",
            image: imgClient
        },
        {
            title: "The Firm",
            author: "John Grisham",
            image: imgFirm
        },
        {
            title: "A time to kill",
            author: "John Grisham",
            image: imgTimeToKill
        }
    ];
    return (
        <div>
            {
                books.map(book=> {
                    return <Book book={book}/>
                })
            }
        </div>
    )
}

export default Content;