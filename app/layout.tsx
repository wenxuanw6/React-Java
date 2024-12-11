"use client";
import { Layout, Menu } from "antd";
import { JSX, useState } from "react";
import PostTable from "./PostTable";
import Page2 from "./Page2";
import { menuItems, postTable } from "@/constants/index";

const { Sider, Content } = Layout;

const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState<string>(postTable);

  const handleMenuClick = (e: { key: string }) => {
    setCurrentPage(e.key);
  };

  const pageComponents: Record<string, JSX.Element> = {
    page1: <PostTable />,
    page2: <Page2 />,
  };

  const renderContent = () => {
    return pageComponents[currentPage] || <PostTable/>;
  };

  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={[postTable]}
              onClick={handleMenuClick}
              style={{ height: "100%", borderRight: 0 }}
              items={menuItems}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: "#fff",
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
