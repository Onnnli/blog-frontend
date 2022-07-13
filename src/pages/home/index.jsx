import React, { useEffect, useMemo } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPopularPosts,
  fetchPosts,
  fetchTags,
} from '../../redux/slices/postSlice/posts';
import Posts from '../../components/posts';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const postsMemo = useMemo(() => posts.items, [posts]);
  const tagsMemo = useMemo(() => tags.items, [tags]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  const onChange = (key) => {
    switch (key) {
      case 'popular':
        dispatch(fetchPopularPosts());
        break;
      case 'new':
        dispatch(fetchPosts());
        break;
      default:
        break;
    }
  };

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane tab="New" key="new">
        <Posts posts={postsMemo} tags={tagsMemo} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Popular" key="popular">
        <Posts
          posts={postsMemo}
          tags={tagsMemo}
          isLoadingPosts={posts.isLoading}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Home;
