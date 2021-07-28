import React from "react";
React.useLayoutEffect = React.useEffect;
import "antd/dist/antd.css";
import "../styles/styles.css";
import { DashboardLayout } from '../components/DashboardLayout';
import { HomeLayout } from "../components/HomeLayout";
const layouts = {
  L1: DashboardLayout,
  L2: HomeLayout,
}


const App = ({ Component, pageProps }) => {
  const Layout = layouts[Component.Layout] || EmptyLayout;
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

const EmptyLayout = ({ children }) => <>{children}</>;

export default App;
