import React from "react";
import { Tag } from "antd";

const TagsList = ({ tags = [] }) => (
  <div className="tags-list">
    {tags.map((name) => (
      <Tag key={name}>{name}</Tag>
    ))}
  </div>
);

export default TagsList;
