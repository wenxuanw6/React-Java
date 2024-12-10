"use client"
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

const { Sider, Content } = Layout;

const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState('page1');


  const handleMenuClick = (e: { key: string }) => {
    setCurrentPage(e.key); 
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      default:
        return <Page1 />;
    }
  };


  const menuItems = [
    {
      key: 'page1',
      label: 'Page 1',
    },
    {
      key: 'page2',
      label: 'Page 2',
    },
  ];

  return (
    <html lang="en">
      <body>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['page1']}
          onClick={handleMenuClick}
          style={{ height: '100%', borderRight: 0 }}
          items={menuItems} 
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: '#fff',
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
      </body>
    </html>
  );
};

export default AppLayout;