import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Nike from "./Nike.png";
import Rentomojo from "./Rentomojo.jpg";
import CrickInfo from "./CrickInfo.png";
import NordstromRack from "./NordstromRack.png";
import TaskManager from "./TaskManager.jpeg"
import Stylecraze from "./Stylecraze.png"

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
              imgPath={Nike}
              isBlog={false}
              title="N I K E . C O M"
              description="A Responsive E-Commerce Website, Providing Clothes & Shoes Products for men, women, and kids. Build with React.js, Redux, and Material-UI. Have features which allows user for Social Signup & Login Functionalities with Glitch-Server and shop For Products."
              ghLink="https://github.com/Rahi999/Nike.com.git"
              demoLink="https://clone-nike.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rentomojo}
              isBlog={false}
              title="R E N T O M O J O . C O M"
              description="Clone of Rentmojo.com, Used for providing Houseware things On Rent. like Furniture, Smartphones, Laptops, Rooms. Build with React.js, Redux, and Chakra-Ui. Have Functionalities like SignUp & Login and Booking Houseware things on Rent."
              ghLink="https://github.com/SayedMajid/rento-mojo-clone.git"
              demoLink="https://csb-v02nso.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CrickInfo}
              isBlog={false}
              title="E S P N C R I C K I N F O . C O M"
              description="Clone of ESPNCrickInfo.com, Allowing Users to watch Live Cricket Matches Score, highlights of recently Happened, and Details Of Upcoming Cricket Matches. Build With React.Js, Bootstrap, HTML, and CSS. "
              ghLink="https://github.com/cs2812/Espn_cric_info-Clone.git"
              demoLink="https://csb-gdn25k-c0ovgbdwd-rahi.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NordstromRack}
              isBlog={false}
              title="N O R D S T R O M R A C K . C O M"
              description="Clone of NordstromRack.com, An E-Commerce Team-Collaborative Project. Build For Allowing Users for Shopping for E-commerce Products. Build With JavaScript, Bootstrap, HTML5, CSS3. Added Features Which allows users to Shop and order the Products."
              ghLink="https://github.com/Aniket-bansal/NordStaarRock.git"
              demoLink="https://dapper-pony-7db47d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskManager}
              isBlog={false}
              title="Task-Manager-Application"
              description="Created A Responsive Task-Manager-Application. Build with React.Js, Bootstrap, javaScript, HTML, and CSS. Have features which allows users for creating the tasks with  Day and Time. If any mistake happens during adding the task they can edit that particular task. After completing the task they can delete a particular task."
              ghLink="https://github.com/Rahi999/Task-Manager-Application.git"
              demoLink="https://csb-8qw6qj.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stylecraze}
              isBlog={false}
              title="Stylecraze.com"
              description="Created Only UI of this website in a team for learning purpose only. Build with HTML and CSS. Have web-pages which  allowing Users to find Make-Up & Health realted tips for women. Women can find lots of tips & tricks for make-up, Yoga, and Health related issues."
              ghLink="https://github.com/srbhkumar624/stylecrazewebsite.git"
               demoLink="https://srbhkumar624.github.io/stylecrazewebsite/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
