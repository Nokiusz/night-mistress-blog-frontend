import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AddPost, Login, PageNotFound, Post, Posts, Profile, Register } from './pages';
import { Layout } from './App.styles';
import { Navbar } from './components';
import useAuth from './hooks/useAuth';

function App() {
  const { user } = useAuth();
  return (
    <Layout>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Posts />}
          />
          {user && (
            <Route
              path="/add/post"
              element={<AddPost />}
            />
          )}

          <Route
            path="/post/:slug"
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
    </Layout>
  );
}

export default App;
