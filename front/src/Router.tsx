import React from 'react';

import {Route,Routes } from 'react-router-dom';
import Home from './pages/shared/Home';
import GastosDeputados from "./pages/timeB/GastosDeputados"
import FaleConosco from "./pages/shared/FaleConosco"
import PerguntasFrequentes from "./pages/shared/PerguntasFrequentes"

const  Router=()=> {
  return (
      <Routes>   
         
          <Route path='/' element={<Home/>}></Route>
          <Route path='/gastos-deputados' element={<GastosDeputados/>}></Route>
          <Route path='/fale-conosco' element={<FaleConosco/>}></Route>
          <Route path='/perguntas-frequentes' element={<PerguntasFrequentes/>}></Route>
    
      </Routes>

  );
}

export default Router;