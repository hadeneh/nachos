import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Coding from './pages/Coding';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path='/home' element={<Home />}></Route>
                <Route path='/coding' element={<Coding />}></Route>
                {/* <Route path='/blockly' element={<MyBlockly />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
