import React from "react";
import imgClient from "./img/the_client.jpg";
import imgFirm from "./img/the_firm.jpg";
import imgTimeToKill from "./img/time_to_kill.jpg";
import Book from "./Book";
import postsData from "./posts.json";
import Post from "./Post";

function Content(props) {
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
    ]
    return (
        <div>
            {
                // NOTE: key is MANDATORY for react elements, since it is used by React to update 
                // the DOM elements using AJAX, THUS it must be UNIQUE
                books.map(book => {
                    return <Book key={book.title + "book_item_list"} book={book} />
                })       
            }
            {
                postsData["savedPosts"].map(post=>{
                    return <Post key={post.title} postData={post} />
                })
            }

        </div>
    )
}

export default Content;