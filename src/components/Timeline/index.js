import React from "react";
import { Timeline, Avatar, Typography } from "antd";

import TagsList from "../TagsList";

import "./index.css";

const OptionalLink = ({ to, children }) =>
  to ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    children
  );

const TimelineList = ({ data }) => {
  const arrayData = Array.isArray(data) ? data : Object.values(data);
  return (
    <Timeline mode="left">
      {arrayData.map(
        ({
          id,
          year,
          icon,
          title,
          subtitle,
          body,
          url,
          color = "blue",
          tags,
        }) => (
          <Timeline.Item color={color} key={id} label={year}>
            {icon ? (
              <Avatar size="large" src={require("../../data/assets/" + icon)} />
            ) : null}
            <h3>
              <OptionalLink to={url}>
                {title}
                {subtitle ? (
                  <span className="subtitle"> - {subtitle}</span>
                ) : (
                  ""
                )}
              </OptionalLink>
            </h3>
            <TagsList tags={tags} />

            <Typography style={{ whiteSpace: "pre-line" }}>{body}</Typography>
          </Timeline.Item>
        )
      )}
    </Timeline>
  );
};

export default TimelineList;
