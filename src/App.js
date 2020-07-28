import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
