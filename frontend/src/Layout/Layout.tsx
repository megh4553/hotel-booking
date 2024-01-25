import React from 'react';
import Header from '../Component/Header';
import Hero from '../Component/Hero';

const Layout = ()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
        </div>
    );
};
export default Layout;