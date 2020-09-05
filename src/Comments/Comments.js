import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import './Comments.css'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #3d3d3d 30%, #242526 90%)',
        borderRadius: 5,
        color: 'white',
        padding: '10px 30px',
        marginBottom: '10px',
        MarginTop: '10px',
        border: '1px solid grey',
        listStyle: 'none',
        display: 'flex',
        lineHeight: '20px'
    },
    margin: {
        marginRight: '10px',
        
    },
    border: {
        borderRadius: '50%'
    },
    height: {
        lineHeight: '1.8'
    }, 
});


const Comments = ({ postId }) => {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId]);

    console.log(comments)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=10&inc=picture`)
            .then(response => response.json())
            .then(data => {
                setPhotos(data.results)
            })
    }, []);
    console.log(photos)

    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <div className={classes.root}>
                            <div className={classes.margin}>
                                <img className={classes.border} src={`https://randomuser.me/api/portraits/med/men/${Math.floor(Math.random() * 100)}.jpg`} alt="" />
                            </div>
                            <div className={classes.height}>
                                <li>Name: {comment.name}</li>
                                <li className='bottomLine'>Email: {comment.email}</li>
                                <li>Comment: {comment.body}</li>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Comments;