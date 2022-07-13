import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { AddPost, FullPost, Home, Login, Registration } from './pages';
import { fetchUser } from './redux/slices/auth';
import Layout from './components/Layout';
import PrivateRoute from './components/routers/PrivateRoute';
import PostsByTag from './pages/postsByTag';

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
              <AddPost isEditing />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/post/create"
          element={
            <PrivateRoute>
              <AddPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
