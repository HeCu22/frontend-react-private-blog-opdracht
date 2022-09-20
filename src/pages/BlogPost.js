import React from 'react';
import posts from '../data/posts.json';  /* json file with blog posts  */
import {useParams, Link} from "react-router-dom";


function BlogPost(props) {
    // console.log('blogpost');
    const { blogid } = useParams(); /*  // parameternaam blogid moet overeenkomen met route pad in App.js */

    // get the blog post passed from the json file

    const currentPost = posts.find((post) => {

        return post.id === blogid;
    });

    console.log('found', currentPost.id);

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