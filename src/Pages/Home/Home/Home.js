import React from 'react';
import Login from '../../Login/Login';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Login />
        </div>
    );
};

export default Home;