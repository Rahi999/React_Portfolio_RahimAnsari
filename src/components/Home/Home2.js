import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pic from "./pic.jpg";
import laptopImg from "../../Assets/about.png";
import Aboutcard from "../About/AboutCard";


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
              "Lad With a <b className="purple"> Million </b> dreams"
              
             
              <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
           
           <p >Frontend Software Developer with excellent academic background and diverse skillset. Ability to deliver clean and reusable code. Experience in 6+ Projects in web development.Well-versed with React, Redux, JavaScript, TypeScript(Basics), HTML, CSS, Tailwind CSS, Material & Chakra-UI. Looking to start a career as a software developer in a reputed Company.</p>
          </Col>
         
        </Row>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={pic} style={{borderRadius:"60%"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
