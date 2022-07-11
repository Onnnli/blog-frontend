import React, { useEffect, useMemo } from 'react';
import { Layout, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from '../redux/slices/posts';
import Post from '../components/Post';
import Sider from '../components/Sider';
import Tags from '../components/Tags';

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const postsMemo = useMemo(() => posts.items, [posts]);
  const tagsMemo = useMemo(() => tags.items, [tags]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  const onChange = () => {};

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane tab="New" key="1">
        <Layout>
          <Layout.Content>
            {posts?.isLoading
              ? [...Array(5)]?.map((_, index) => (
                  <Post key={index} isLoading={posts.isLoading} />
                ))
              : postsMemo?.map((post, index) => (
                  <Post
                    key={index}
                    {...post}
                    commentsCount={post?.comments?.length}
                    isEditable={user?._id === post?.user?._id}
                  />
                ))}
          </Layout.Content>
          <Sider theme="light">
            <Tags items={tagsMemo} isLoading={tags.isLoading} />
          </Sider>
        </Layout>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Popular" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
    </Tabs>
  );
};
