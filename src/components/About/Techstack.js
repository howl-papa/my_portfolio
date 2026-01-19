import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiFastapi, SiOpenai } from "react-icons/si";
import { DiDatabase } from "react-icons/di";

import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
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
