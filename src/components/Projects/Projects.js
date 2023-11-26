import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/6.png"; 
import editor from "../../Assets/Projects/5.png";
import ecommerce from "../../Assets/Projects/1.png"; 
import two from "../../Assets/Projects/2.png";
import notion from "../../Assets/Projects/notion.png"; 
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
              imgPath={notion}
              isBlog={false}
              title="Notion Application Clone"
              description="Notion is a  Note taking application boasting real-time database functionality and a user-friendly editor. It supports infinite children documents, Trash-Can features for soft deletes and robust authentication. "
              ghLink="https://github.com/incruder1/Notion-Clone"
              demoLink="https://notion-clone-incruder1.vercel.app/"
            />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Full Stack Ecommerce Website"
              description=" MERN-based Ecommerce Website with an Admin Panel, offering users an intuitive shopping experience. Features include user authentication, product management, and secure payments. The admin panel allows easy item addition, editing, and deletion."
              ghLink="https://github.com/incruder1/Ecommerce-Application"
              demoLink="https://drab-gray-cormorant-tutu.cyclic.app/"
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
