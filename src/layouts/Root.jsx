import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Topbar from '../components/Topbar/Topbar';

const Root = () => {
    return (
        <div className='@container roboto-font'>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;