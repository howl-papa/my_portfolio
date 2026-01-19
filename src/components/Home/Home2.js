import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am an <b className="purple">AI Product Builder</b> who validates hypotheses with code and strategizes based on ROI.
                            <br />
                            <br />
                            I specialize in solving business problems through technical implementation, bridging the gap between strategy and execution.
                            <br />
                            <br />
                            I am proficient in
                            <i>
                                <b className="purple"> Python, FASTAPI, and RAG/LLM technologies. </b>
                            </i>
                            <br />
                            <br />
                            My field of interest is building new &nbsp;
                            <i>
                                <b className="purple">AI Products</b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Data-Driven Decision Making.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I apply my passion for developing products with <b className="purple">Modern Frameworks</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Advanced AI Models
                                </b>.
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/howl-papa"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/yongrak-pro"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:yongrak.pro@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillMail />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
