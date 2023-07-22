import React from "react";
import Pokemon from "./Pokemon";
// import Home from "./Home";
// import Dummy from "./Dummy";
import { Layout } from "antd";

const Pages = () => {
  return (
    <Layout
      style={{
        marginTop: "4rem",
      }}>
      <Pokemon />
      {/* <Home />
      <Dummy /> */}
    </Layout>
  );
};

export default Pages;
