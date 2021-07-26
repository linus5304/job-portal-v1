import { Layout, Menu, Breadcrumb } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Navbar } from "../components/Navbar";

interface indexProps {}
const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout className="site-layout">
      <Header  style={{ position: "fixed", zIndex: 1, width: "100%" }} className="site-layout-background">
        
        <Navbar user='user'/>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default index;
