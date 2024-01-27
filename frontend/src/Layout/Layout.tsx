import React, { Children } from 'react';
import Header from '../Component/Header';
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';

interface Props{
    children: React.ReactNode;
}

const Layout = ({children} : Props)=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className='container mx-auto py-10 flex-1'>{children}</div>
            <Footer />
        </div>
    );
};
export default Layout;