import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const Rotas = () => {

    const logado = localStorage.getItem('@user');

    return(
        <BrowserRouter>
            <Routes>
                {!logado && <Route path="/" element={<Login />} />}
                {logado && <Route path="/" element={<Home />} />}
            </Routes>
        </BrowserRouter>
    )
};

export default Rotas;