import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './Router';


const  App=()=> {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;