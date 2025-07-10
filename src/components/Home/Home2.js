import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
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
              I was drawn to programming by its challenges, thrill, and the
              gratification of turning lines of code into impactful solutions.🙂
              <br />
              As an enthusiastic and dedicated open-source advocate, I possess a
              strong foundation in computer science and a diverse skill set that
              allows me to adapt to various programming languages.
              <br />
              <b className="purple"> My language-agnostic mindset</b>, combined
              with a proactive learning attitude and effective problem-solving
              skills, enables me to thrive in collaborative environments.
              <br />
              I am committed to continuous growth and am eager to make a
              meaningful impact in the field of software engineering.
              <br />
              <br />I love crafting scalable web apps, debugging the tricky
              stuff, and turning ideas into clean, efficient code — with a
              strong tilt towards <b className="purple">
                Python, Node.js
              </b>, <b className="purple">React.js</b>, and{" "}
              <b className="purple">Next.js</b>.
              <i>
                <b className="purple">Web Apps and exciting projects</b>
              </i>
              <br />
              <br />
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
                  href="https://github.com/incruder1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dev-johri-707a91138/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/dev_johrii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
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
