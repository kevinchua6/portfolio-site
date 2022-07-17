import React from "react";
import { PageHeader } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

const NavigationBar = () => (
  <nav>
    <Link to="/">
      <PageHeader
        className="site-header"
        title="Kevin"
        subTitle="web/app developer"
      />
    </Link>
  </nav>
);

export default NavigationBar;
