import React from "react";
import Pokemon from "../Pages/pokemon/Pokemon";
// import Home from "./Home";
// import Dummy from "./Dummy";
import { Layout } from "antd";
import "./pages.css"

const Pages = () => {
  return (
    <Layout className="pages"
      style={{
        
      }}>
      <Pokemon />
      {/* <Home />
      <Dummy /> */}
    </Layout>
  );
};

export default Pages;
