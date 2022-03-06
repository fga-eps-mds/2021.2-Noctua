import React from 'react';
import Home from './Home';
import Navbar from './components/Navbar';

import {Route,Routes } from 'react-router-dom';
import Router from './Router';


const  App=()=> {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;