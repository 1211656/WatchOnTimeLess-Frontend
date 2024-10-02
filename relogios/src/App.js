import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {} from 'react';
import MegaMenuWithPlacement from './components/menu/NavListMenu';
import NavListMenu from './components/menu/NavListMenu';
import PhotoBanner from './components/PhotoBanner';

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/menu/HomePage';
import Marcas from './components/menu/Marcas';
import CondicoesGerais from './components/menu/CondicoesGerais';
import Garantia from './components/menu/Garantia';
import Entrega from './components/menu/Entrega';
import UsersReport from './components/reports/UsersReport';
import RelogioPerfil from './components/relogios/RelogioPerfil';
import SearchPage from './components/SearchPage';
import LoginRegisterPage from './components/LoginRegisterPage';


function App() {
  return (
    <Router className=''>
      <Routes>
        
        
        <Route path="/login" element= {<LoginPage/>}></Route>
        <Route path="/loginRegister" element={<LoginRegisterPage/>}></Route>
        <Route path="/register" element= {<RegisterPage/>}></Route>
        <Route path="/" element= {<div className='' ><HomePage/></div>}></Route>
        <Route path="/marcas/:marca" element= {<Marcas/>}></Route>
        <Route path="/condicoesGerais" element= {<CondicoesGerais/>}></Route>
        <Route path="/garantia" element= {<Garantia/>}></Route>
        <Route path="/entrega" element= {<Entrega/>}></Route>
        <Route path="/reportUtilizadores" element= {<UsersReport/>}/>
        <Route path="/relogio/:id" element={<RelogioPerfil />} />
        <Route path="/search" element={<SearchPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
