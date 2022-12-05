import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn,AiOutlineMail } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rahim Ansari</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RA</h3>
        </Col>
        <Col md="4" className="footer-body">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rahi999"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/@AhilHussain8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahim-ansari-43861922b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ahilh871@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsFillEnvelopeFill />
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
