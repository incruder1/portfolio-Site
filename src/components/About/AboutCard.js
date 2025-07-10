import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dev Johri </span>
            from{" "}
            <span className="purple"> Ghaziabad,Uttar Pradesh, India.</span>
            <br /> I am <span className="purple">2024</span> Batch{" "}
            <span className="purple">Btech</span> Grad From IIIT, Gwalior.
            <br />
            Additionally, I am currently SDE at{" "}
            <span className="purple"> Procol</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading History
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "“Any sufficiently advanced technology is indistinguishable from
            magic"{" "}
          </p>
          <footer className="blockquote-footer"> Arthur C. Clarke </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
