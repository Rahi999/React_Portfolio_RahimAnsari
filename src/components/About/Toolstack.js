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
  SiNetlify,
  SiPycharm,
  SiFirebase,
  SiMicrosoftexcel
} from "react-icons/si";
import {
  DiNodejs,
  DiGit,
  DiNpm,
  DiCodepen,
  DiAws,
  SiPicardsurgeles,
  
} from "react-icons/di"
import { FaAws, FaJira } from "react-icons/fa";
import { BsFileExcel } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VsCode">
        <SiVisualstudiocode />
        <p className="techstacks">VsCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyCharm">
        <SiPycharm />
        <p className="techstacks">PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
        <p className="techstacks">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
        <p className="techstacks">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Surge.sh">
      />
        <p className="techstacks">Surge.sh</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify />
        <p className="techstacks">Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
        <p className="techstacks">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jira-product">
        <FaJira />
        <p className="techstacks">Jira Product</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft-excel">
        <SiMicrosoftexcel />
        <p className="techstacks">Excel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Cypress">
        <SiCypress />
        <p className="techstacks">Cypress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jest">
        <SiJest />
        <p className="techstacks">Jest</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node">
        <DiNodejs />
        <p className="techstacks">Node</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GIT"> 
        <DiGit />
        <p className="techstacks">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Codesandbox">
        <SiCodesandbox />
        <p className="techstacks">Codesandbox</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Codepen">
        <DiCodepen />
        <p className="techstacks">Codepen</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
