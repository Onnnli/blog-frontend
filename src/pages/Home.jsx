import React, { useEffect, useMemo } from 'react';
import { Layout, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from '../redux/slices/posts';
import Post from '../components/Post';
import Sider from '../components/Sider';
import Tags from '../components/Tags';
import CommentsBlock from '../components/CommentsBlock';

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
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
              : postsMemo?.map((post, index) => <Post key={index} {...post} />)}
          </Layout.Content>
          <Sider theme="light">
            <Tags items={tagsMemo} isLoading={tags.isLoading} />
            <CommentsBlock
              items={[
                {
                  user: {
                    fullName: 'Вася Пупкин',
                    avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                  },
                  text: 'Это тестовый комментарий',
                },
                {
                  user: {
                    fullName: 'Иван Иванов',
                    avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                  },
                  text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
                },
              ]}
              isLoading={false}
            />
          </Sider>
        </Layout>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Popular" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
    </Tabs>
  );
};
