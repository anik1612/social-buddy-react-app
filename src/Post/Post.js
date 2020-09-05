import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #3d3d3d 30%, #242526 90%)',
      border: 0,
      borderRadius: 5,
      color: 'white',
      padding: '10px 30px',
      marginBottom: '10px'
    },
  });

const Post = (props) => {
    console.log(props)
    const classes = useStyles();
    const {body, id, title} = props.post;
    return (
        <div className={classes.root}>
            <p>Post Title: {title}</p>
            <p>{body}</p>
            <Link style={{color: '#0A80EC', textDecoration:'none'}} to={`/post/${id}`}>See More...</Link>
        </div>
    );
};

export default Post;