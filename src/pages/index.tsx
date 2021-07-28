import { Layout, Menu, Breadcrumb } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Hero } from "../components/Hero";
import { Employers } from "../components/Employers";
import { HeroPost } from "../components/HeroPost";
import { FeaturedJobs } from "../components/FeaturedJobs";
import { LatestJobs } from "../components/LatestJobs";
import { JobsBy } from "../components/JobsBy";
import { JobAlertForm } from "../components/JobAlertForm";
import { PageFooter } from "../components/PageFooter";
import { Navbar } from "../components/Navbar";

interface indexProps {}
const index: React.FC<indexProps> = ({}) => {
  return (
    <Layout className="site-layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} className="site-layout-background">
        
        <Navbar user='user'/>
      </Header>
      <Content
        className="site-layout"
        style={{ marginTop: 64 }}
      >
        
        <div
          className="site-layout-background"
        >
          <Hero />
          <Employers/>
          <HeroPost/>
          <FeaturedJobs/>
          <LatestJobs/>
          <JobsBy/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background:'#0e0f11' }}>
        <PageFooter/>
      </Footer>
    </Layout>
  );
};

export default index;
