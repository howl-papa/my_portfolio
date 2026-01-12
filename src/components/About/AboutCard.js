import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yongrak Park </span>
            from <span className="purple"> Seoul, Korea.</span>
            <br />I am a <span className="purple">Product Builder who validates hypotheses with code</span> and an <span className="purple">Global Retail Scaler</span>.
            <br />
            <br />
            I have completed the <span className="purple">Microsoft AI School</span> (Team Project Leading) and am majoring in <span className="purple">Economics and Entrepreneurship</span> at Kyonggi University (2 years Scholarship).
            <br />
            <br />
            Apart from coding, I am actively involved in:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteer at Dog Shelter (7 years) & Adopter
            </li>
            <li className="about-activity">
              <ImPointRight /> Child Foundation Sponsor (5 years)
            </li>
            <li className="about-activity">
              <ImPointRight /> Community Host (130+ Reading Club campaigns)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
