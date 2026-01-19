import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header" style={{ textAlign: "center" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YONGRAK PARK</strong>
              </h1>

              <div className="type-component">
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />


    </section>
  );
}

export default Home;
