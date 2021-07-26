import React from "react";
React.useLayoutEffect = React.useEffect;
import "antd/dist/antd.css";
import "../styles/styles.css";

const App = ({ Component, pageProps }) => {
  const Layout = Component.Layout || EmptyLayout;
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
