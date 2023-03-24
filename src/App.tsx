import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PageNotFound } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div>Home</div>}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
