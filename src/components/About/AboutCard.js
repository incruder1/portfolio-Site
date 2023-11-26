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
            from <span className="purple"> Moradabad, Uttar Pradesh, India.</span>
            <br /> I am a final year student pursuing an Integrated BTech IT and MBA at ABV-IIITM Gwalior.
            <br />
            {/* Additionally, I am currently searching as a software developer at
            Juspay. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading History 📜
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the challenges of today's code, for they are the stepping stones to tomorrow's innovation!"{" "}
          </p>
          <footer className="blockquote-footer">anonymous </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
