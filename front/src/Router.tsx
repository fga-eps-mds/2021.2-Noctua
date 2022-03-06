import React from 'react';

import {Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import GastosDeputados from "./pages/timeB/GastosDeputados"


const  Router=()=> {
  return (
      <Routes>   
         
          <Route path='/' element={<Home/>}></Route>
          <Route path='/gastos-deputados' element={<GastosDeputados/>}></Route>
    
      </Routes>

  );
}

export default Router;