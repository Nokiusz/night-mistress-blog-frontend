import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div>Home</div>}
        />
        <Route
          path="*"
          element={<div>404</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
