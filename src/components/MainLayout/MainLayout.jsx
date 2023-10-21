import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <div className="md:w-10/12 mx-auto px-4 h-screen flex flex-col">
      <Header />
      <div className="my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;