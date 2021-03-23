import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    brandText: {
        textDecoration: 'none',
        color: 'white',
    },
    margin: {
        marginBottom: '33px'
    }
}));

export default function Header() {
    const classes = useStyles();
    let history = useHistory();

    const goBackBtn = () => {
        history.push('/home');
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.margin}>
                <Container>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Link className={classes.brandText} to='/home'>Social Buddy - React</Link>
                    </Typography>
                        <Button onClick={goBackBtn} color="inherit">Go back</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
