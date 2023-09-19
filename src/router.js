import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Output from './src/output';

const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/2" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default RoutesTree;
