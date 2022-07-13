import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchUser } from './redux/slices/auth';
import Layout from './components/layout';
import PrivateRoute from './components/routers/PrivateRoute';
import Home from './pages/home';
import Login from './pages/login';
import Registration from './pages/registration';
import FullPost from './pages/fullPost';
import PostsByTag from './pages/postsByTag';
import CreatePost from './pages/createPost';

import 'antd/dist/antd.min.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tags/:id" exact element={<PostsByTag />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/posts/:id" exact element={<FullPost />} />
        <Route
          path="/posts/:id/edit"
          exact
          element={
            <PrivateRoute>
              <CreatePost isEditing />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/post/create"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
