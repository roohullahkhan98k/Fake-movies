
import React from 'react';
import { SideBar, Header, Footer } from '../index'; 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
        <Header />
      <div className="main-content">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
