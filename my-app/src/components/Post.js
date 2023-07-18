import React from "react";

function Post(props){
    const post = props.postData;
    return (
        <div>
            <h5>{post.title}</h5>
            <p>{post.sentence}</p>
            <p>{post.description}</p>
            <p>{post.paragraph}</p>
            <p>{post.name}</p>
            <img src={post.image} />
        </div>
    )
}

export default Post;