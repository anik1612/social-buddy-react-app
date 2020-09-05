import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <h1 style={{color: 'white'}} border={1}>Today's All Post:</h1>
            {
            posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;