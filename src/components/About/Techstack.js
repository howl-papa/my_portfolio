import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiFastapi, SiMicrosoftazure, SiOpenai } from "react-icons/si";
import { DiPython, DiReact, DiGit, DiDatabase } from "react-icons/di"; // Using Di icons if Si not available? The template used images for many.
// I will keep the image imports for existing ones and add new ones if possible.
// Wait, the template imports local SVGs for Python, etc.
// I should use the existing SVGs where possible.
// Python, React, Git, Docker, SQL (Postgres) are already imported as SVGs.
// I need FastAPI, Azure, OpenAI. I will use React Icons for these.

import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import GCP from "../../Assets/TechIcons/GCP.svg";
import Azure from "../../Assets/TechIcons/Azure.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"20px"} /> {/* Need to import SiFastapi */}
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase fontSize={"20px"} />
        <div className="tech-icons-text">LlamaIndex</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="azure" />
        <div className="tech-icons-text">Azure</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"20px"} /> {/* Need to import */}
        <div className="tech-icons-text">OpenAI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GCP} alt="gcp" className="tech-icon-images" />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"20px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
