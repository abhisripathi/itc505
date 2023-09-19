import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './src/output';

const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/2" element={<output />} />
      </Routes>
    </Router>
  );
}

export default RoutesTree;
