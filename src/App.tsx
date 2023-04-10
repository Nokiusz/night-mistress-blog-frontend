import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { AddPost, Login, PageNotFound, Post, Posts, Profile, Register } from './pages';
import { Layout } from './App.styles';

function App() {
  return (
    <Layout>
      <Router>
        <Navbar />
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
