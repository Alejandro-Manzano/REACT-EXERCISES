import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
      <>
      <Header>
        <Navbar />
      </Header>
      <Outlet/>
      <Footer>
        <p>Este es el pie de página</p>
      </Footer>
      </>
    
  );
};

export default App;
