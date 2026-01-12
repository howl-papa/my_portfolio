import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiNotion } from "react-icons/si";
import Miro from "../../Assets/TechIcons/Miro.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Excel from "../../Assets/TechIcons/Excel.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Miro} alt="Miro" className="tech-icon-images" />
        <div className="tech-icons-text">Miro</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="tech-icon-images" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Excel} alt="Excel" className="tech-icon-images" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-icon-images" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman fontSize={"20px"} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion fontSize={"20px"} />
        <div className="tech-icons-text">Notion</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
