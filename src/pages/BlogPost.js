import React from 'react';
import posts from '../data/posts.json';
import {useParams, Link} from "react-router-dom";


function BlogPost(props) {
    const { blogid } = useParams(); /*  // parameternaam blogid moet overeenkomen met route pad in App.js */
    console.log({blogid});
    console.log(posts);

    const currentPost = posts.find((post) => {
        return post.id === blogid;
    });

    return (
        <>
            <h1>post</h1>
            <h3>{currentPost.date}</h3>
           <p>blogid: {currentPost.id}</p>
            <p>title: {currentPost.title}</p>

            <p>content: {currentPost.content}</p>

            <Link to="/">Terug naar Home</Link>

        </>
    );
}

export default BlogPost;