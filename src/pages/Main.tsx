import React from "react";
import { Layout } from "containers";
import { FileInput } from "components";

const MainPage = () => {
  return (
    <Layout>
      <FileInput />
      <span>데이터 있음</span>
    </Layout>
  );
};

export default MainPage;
