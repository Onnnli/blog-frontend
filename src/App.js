import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { AddPost, FullPost, Home, Login, Registration } from './pages';
import { fetchUser } from './redux/slices/auth';
import Layout from './components/Layout';

import 'antd/dist/antd.min.css';
import PrivateRoute from './components/routers/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/posts/:id" element={<FullPost />} />
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
