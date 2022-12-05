import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3
  
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiCsswizardry,
  SiTypescript,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiJquery

} from "react-icons/si";
import {
  TiHtml5
} from "react-icons/ti"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="React.Js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TypeScript(Basics)">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jquery(Basics)">
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3"> 
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chakra-Ui">
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Material-Ui">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
