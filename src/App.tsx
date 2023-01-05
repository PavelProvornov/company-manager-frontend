import React, { FC } from 'react';
import { Link, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Test from './pages/Test';


const App: FC = () => {
    return (
        <div className='app'>
            <div className="nav">
                <Link to="/">Link Dashboard</Link>
                <Link to="/test">Link Test</Link>
            </div>
            <div className="content">
            <Routes>
                <Route path="/" element={ <Dashboard/> } />
                <Route path="/test" element={ <Test/> } />
            </Routes>
            </div>
        </div>
    );
};

export default App;
