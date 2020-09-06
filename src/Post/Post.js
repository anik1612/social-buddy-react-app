import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #3d3d3d 30%, #242526 90%)',
      border: 0,
      borderRadius: 5,
      color: 'white',
      padding: '10px 30px',
      marginBottom: '10px'
    },
    textStyle: {
      color: 'yellowgreen',
      fontWeight: 'bold',
    }
  });

const Post = (props) => {
    const classes = useStyles();
    const {body, id, title} = props.post;

    let history = useHistory();

    const handleBtn = (id) => {
      history.push(`/post/${id}`)
    }

    return (
        <div className={classes.root}>
            <p> <span className={classes.textStyle}>Post Title:</span> {title}</p>
            <p> <span className={classes.textStyle}>  Post Body: </span>  <br/> {body}</p>
            <Button onClick={() => handleBtn(id)} variant="contained" color="primary">
            See More...
</Button>
        </div>
    );
};

export default Post;