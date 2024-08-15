import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Layout() {
  return (
    <>
        {/* Your header remains fixed */}
        <Header/>
        {/* It will change the component dynamically when we pass it */}
        <Outlet/>
        {/* Your footer remains fixed   */}
        <Footer/>
    </>
  )
}

export default Layout