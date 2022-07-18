import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "antd";

import Page from "../components/Page";
import Timeline from "../components/Timeline";

import teaching from "../data/teaching.json";
import work from "../data/work.json";
import projects from "../data/projects.json";

import "./Resume.css";

const Resume = () => (
  <Page title="Portfolio">
    <p>
      Hello! I'm Kevin. I'm a Year 3 Computer Science student at the National
      University of Singapore (NUS). I'm currently a tech lead at the Google
      Developers Student Clubs and have taught a couple of modules.
    </p>

    <Anchor id="sidebar">
      <Anchor.Link href="#/resume/#work-experience" title="Work Experience" />
      <Anchor.Link href="#/resume/#projects" title="Projects" />
      <Anchor.Link href="#/resume/#teaching" title="Teaching" />
    </Anchor>

    <h2 id="/resume/#work-experience">Work Experience</h2>
    <Timeline data={work} />

    <h2 id="/resume/#projects">
      <Link to="/projects">Projects</Link>
    </h2>
    <Timeline data={projects} />

    <h2 id="/resume/#teaching">Teaching</h2>
    <Timeline data={teaching} />
    <div className="spacer" />
  </Page>
);

export default Resume;
