import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
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


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/valeria-toneva-39a89a230/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/valeriatoneva"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
