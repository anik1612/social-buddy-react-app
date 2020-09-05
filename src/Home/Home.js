import React from 'react';
import Header from '../Header/Header';
import { Container } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Home = () => {

    return (
        <div>
            <Header/>
            <Container maxWidth='sm'>
                <Posts />
            </Container>
        </div>
    );
};

export default Home;