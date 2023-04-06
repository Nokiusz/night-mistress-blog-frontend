import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login, PageNotFound, Post, Posts, Profile, Register } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Posts />}
        />
        <Route
          path="/add/post"
          element={<AddPost />}
        />
        <Route
          path="/post/:id"
          element={<Post />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/profile"
          element={<Profile />}
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
