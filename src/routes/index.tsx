import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const RoutesConfig: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}/>
    <Route path="/repositories/:repository+" element={<Repository />}/>
  </Routes>
);

export default RoutesConfig;
