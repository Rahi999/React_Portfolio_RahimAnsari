import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import pic from "./pic.jpg";
import laptopImg from "../../Assets/about.png";
// import Aboutcard from "../About/AboutCard";


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
           
           <p >
           Versatile Developer & QA Automation Engineer | Frontend & Backend Expert 
           <br />
           <br/>
           I am a Versatile Developer and QA Automation Engineer, proficient in both frontend and backend development, with a proven track record of crafting clean and reusable code. With a portfolio spanning over 6 successful web projects (Including Facebook clone), my expertise covers a wide spectrum of technologies. On the frontend, I excel in creating captivating user interfaces using technologies like React, Redux, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Material-UI, and Chakra-UI. On the backend, I am skilled in building robust and efficient systems using Node.js, Express.js, and MongoDB.
           <br/>
           <br/>
           My versatility extends beyond development. I am also thriving as a QA & Automation Engineer at Masai School, where I enhance my skillset with technologies such as Python, pip, selenium, allure, pytest, Jenkins, and Manual testing. This dual expertise in frontend and backend development, along with quality assurance practices, uniquely equips me to contribute holistically across the software development spectrum.
           <br /><br />
           </p>
          </Col>
         
        </Row>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image src={pic} style={{borderRadius:"30%"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
