import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Coding from './pages/Coding';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Home />}></Route>
            <Route path='/coding' element={<Coding />}></Route>
        </Routes>
    );
}

export default Main;