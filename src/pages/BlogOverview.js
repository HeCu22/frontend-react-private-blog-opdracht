import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function BlogOverview(props) {
    return (
        <section>
            <h1>Blog overview</h1>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                        <Link to={`blogpost/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                })}
            </ul>
        </section>
    );
}

export default BlogOverview;