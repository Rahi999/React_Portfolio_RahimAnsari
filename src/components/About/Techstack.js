import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsCloud, BsCloudDownload, BsCloudUpload, BsDot } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,


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
  SiJquery,
  SiPython,
  SiPytest,
  SiExpress,
  SiJenkins,
  BiLogoAws,
  SiSelenium,
  BsFillCloudArrowUpFill,
  SiMongodb

} from "react-icons/si";
import {
  TiHtml5, TbCircleDotted
} from "react-icons/ti"

function Techstack() {
  return (
    <>
      <ul>
        <li style={{ textAlign: 'left', marginLeft: '40px' }}><h5 >Frontend : </h5></li>
      </ul>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
          <p className="techstacks">JavaScript </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="React.Js">
          <DiReact />
          <p className="techstacks">ReactJs</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Redux">
          <SiRedux />
          <p className="techstacks">Redux</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="HTML5">
          <TiHtml5 />
          <p className="techstacks">HTML5</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="CSS3">
          <DiCss3 />
          <p className="techstacks">CSS3</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Chakra-Ui">
          <SiChakraui />
          <p className="techstacks">Chakra UI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Material-Ui">
          <SiMaterialui />
          <p className="techstacks">Material UI</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
          <SiBootstrap />
          <p className="techstacks">Bootstrap</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Cloudinary">
          <BsCloudUpload />
          <p className="techstacks">Cloudinary</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Talwind-css">
          <p>.</p>
          <p className="techstacks">Tailwind-css</p>
        </Col>
      </Row>

      <ul>
        <li style={{ textAlign: 'left', marginLeft: '40px' }}><h5 >Backend : </h5></li>
      </ul>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
          <p className="techstacks">JavaScript </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
          <p className="techstacks">MongoDB </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="ExprssJs">
          <SiExpress />
          <p className="techstacks">ExpressJs </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="NodeJs">
          <DiNodejs />
          <p className="techstacks">NodeJs </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Atlas">
          <SiMongodb />
          <p className="techstacks">Atlas </p>
        </Col>

      </Row>

      <ul>
        <li style={{ textAlign: 'left', marginLeft: '40px' }}><h5 >Automation & testing : </h5></li>
      </ul>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <SiPython />
          <p className="techstacks">Python </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Pytest">
          <SiPytest />
          <p className="techstacks">Pytest </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Selnium">
          <SiSelenium />
          <p className="techstacks">Selenium </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Jenkins">
          <SiJenkins />
          <p className="techstacks">Jenkins </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Allure">
          <p>.</p>
          <p className="techstacks">Allure </p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
