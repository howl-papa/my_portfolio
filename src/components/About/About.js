import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={5}
              style={{ paddingTop: "30px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <Aboutcard />
            </Col>
          </Row>

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <h1 className="project-heading">
            <strong className="purple">Certifications</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="about-img">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://skillshop.credential.net/511651c9-8355-42da-ab37-73498e1e78b1#acc.uM6NA3P9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}>
                    👉 Google Analytics Certification (GA4)
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://verify.skilljar.com/c/sbdch99vvced" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}>
                    👉 Anthropic Model Context Protocol (MCP)
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <a href="https://www.credly.com/badges/48c1839d-ad9e-4939-bce6-5afcc6047beb/linked_in_profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", fontSize: "1.2em" }}>
                    👉 Azure AI Fundamentals (AI-900)
                  </a>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <span style={{ color: "white", fontSize: "1.2em" }}>
                    👉 OPIc (Intermediate Mid 2)
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <Github />

        </Container>
      </Container>
    </>
  );
}

export default About;
