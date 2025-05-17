
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/ui/Navbar/Navbar';
import React, { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;