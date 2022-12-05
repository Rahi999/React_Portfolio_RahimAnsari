import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiCypress,
  SiJest,
  SiCodesandbox,
  SiGlitch,
  SiNetlify
} from "react-icons/si";
import {
  DiNodejs,
  DiGit,
  DiNpm,
  DiCodepen

} from "react-icons/di"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="VsCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cypress">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jest">
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GIT"> 
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Codesandbox">
        <SiCodesandbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Codepen">
        <DiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Heroku-Server">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Glitch-Server">
        <SiGlitch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
