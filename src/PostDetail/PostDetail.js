import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { makeStyles, Container } from '@material-ui/core';
import './PostDetail.css'
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #3d3d3d 30%, #242526 90%)',
        borderRadius: 5,
        color: 'white',
        padding: '10px 30px',
        marginBottom: '10px',
        MarginTop: '10px',
        border: '1px solid grey'
    },
    color: {
        color: 'white',
    }
});

const PostDetail = () => {
    const classes = useStyles();
    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState([])
    console.log(postDetail)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data));
    }, [])

    return (
        <div>
            <Header />
            <Container maxWidth='sm'>
                <div className={classes.root}>
                    <p>Post Title: {postDetail.title}</p>
                    <p>{postDetail.body}</p>
                </div>
                <h5 className={classes.color}>All Comment will shown below: {}</h5>
                <div className={classes.root}>
                    <Comments postId={postId} key={postDetail.id}/>
                </div>
            </Container>
        </div>
    );
};

export default PostDetail;