import React from "react";
import { PageHeader } from "antd";

import "./index.css";

const Page = ({ title, subTitle = "", avatar, children }) => (
  <div className="page-wrapper">
    <main className="page">
      <PageHeader
        className="page-header"
        title={title}
        subTitle={subTitle}
        avatar={avatar}
      />
      {children}
    </main>
  </div>
);

export default Page;
