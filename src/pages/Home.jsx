import React from 'react';
import { Tabs } from 'antd';
import NewPostTab from '../components/NewPostTab';

export const Home = () => {
  const onChange = () => {};

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <Tabs.TabPane tab="New" key="1">
        <NewPostTab />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Popular" key="2">
        Content of Tab Pane 2
      </Tabs.TabPane>
    </Tabs>
  );
};
