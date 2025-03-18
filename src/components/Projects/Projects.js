import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/6.png";
import editor from "../../Assets/Projects/5.png";
import ecommerce from "../../Assets/Projects/1.png";
import notion from "../../Assets/Projects/notion.png";
import two from "../../Assets/Projects/2.png";
import img1 from "../../Assets/Projects/img1.png";
import img2 from "../../Assets/Projects/img2.png";
import globetrotter from "../../Assets/Projects/globetrotter.png"
import interview from "../../Assets/Projects/interview.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globetrotter}
              isBlog={false}
              title="Globetrotter Game"
              description="full-stack Web app designed as a travel guessing game where users guess destinations based on cryptic clues. The app includes AI-generated datasets, backend storage, scoring, animations, and a 'Challenge a Friend' feature."
              ghLink="https://github.com/incruder1/Globetrotter"
              demoLink="https://globetrotter-84sf.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="AI Mock Interview Helper "
              description="This is an AI-powered mock interview platform designed to help job seekers practice and improve their interview skills. The platform includes a video recording feature, a timer, and a feedback system that provides users with a detailed analysis of their performance."
              ghLink="https://github.com/incruder1/InterviewHelper"
              ytLink="https://interview-helper-iota.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Module Mapper"
              description="developed a tool that enables developers to efficiently scan codebases from any branch, GitHub repository, or local folder, generating visual representations of the code structure and project dependencies."
              ghLink="https://github.com/incruder1/module-mapper"
              ytLink="https://www.youtube.com/watch?v=T3P_jchsP-0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img2}
              isBlog={false}
              title="Patient Management System"
              description="Comprehensive patient management system that streamlines the appointment booking process for patients while providing administrators with efficient tools to manage, confirm, and cancel appointments."
              ghLink="https://github.com/incruder1/CarePulse--Patient-Management-System"
              demoLink="https://pns-kajfovnsa-incruder1s-projects.vercel.app/"
              ytLink="https://www.youtube.com/watch?v=K9ZS_99K9h0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notion}
              isBlog={false}
              title="Notion Note Making Application"
              description=" Implemented real-time database sync, dynamic light/dark mode, and secure authentication and enabled efficient file management with upload, delete, and replace functionalities."
              ghLink="https://github.com/incruder1/Notion-Clone"
              demoLink="https://notion-clone-incruder1.vercel.app/"
              ytLink="https://www.youtube.com/watch?v=-L2nR86k4Dk&feature=youtu.be"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Full Stack Ecommerce"
              description=" MERN-based Ecommerce Website with an Admin Panel, offering users an intuitive shopping experience. Features include user authentication, product management, and secure payments."
              ghLink="https://github.com/incruder1/ecommerce-fullStack"
              demoLink="https://ecommerce-application-z5pi.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={two}
              isBlog={false}
              title="Youtube Bookmark"
              description="Chrome extension for streamlined YouTube video bookmarking. It simplifies the process of saving and managing favorite videos, enhancing user browsing experience. Developed with JavaScript"
              ghLink="https://github.com/incruder1/Youtube-Bookmark-Chrome-Extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VideoChatApp-WebRTC"
              description="I designed a real-time video calling application using Socket.IO and WebRTC, enabling seamless video communication.Providing users with a reliable platform for virtual meetings and collaboration."
              ghLink="https://github.com/incruder1/VideoChatApp-WebRTC.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FrontEnd Ecommerce Website-Strapi"
              description="creating responsive, visually appealing online shopping platforms. It emphasizes user experience, intuitive navigation, and dynamic product displays, delivering an engaging and efficient retail interface.."
              ghLink="https://github.com/incruder1/Ecommerce-App-frontend-/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
