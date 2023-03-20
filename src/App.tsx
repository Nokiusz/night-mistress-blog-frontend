import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DatePicker } from 'antd';

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
