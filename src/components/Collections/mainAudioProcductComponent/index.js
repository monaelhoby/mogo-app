import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'

const MainProduct = ({}) => (
  <Container>
    <Row className="main-content">
      <Col xs="6" className="main-content-item">
        <div className="main-content-img"><img src="//cdn.shopify.com/s/files/1/2235/6053/files/subcategory-01_1920x.jpg?v=1511801159"/></div>
        <div className="main-content-descriaption"><a href="#">Wireless </a></div>
      </Col>
      <Col xs="6" className="main-content-item">
        <div className="main-content-img"><img className="img-fluid" src="//cdn.shopify.com/s/files/1/2235/6053/files/subcategory-02_1920x.jpg?v=1511801207"/></div>
        <div className="main-content-descriaption"><a href="#">Built-In Microphone </a></div>
      </Col>
      <Col xs="6" className="main-content-item">
        <div className="main-content-img"><img src="//cdn.shopify.com/s/files/1/2235/6053/files/subcategory-03_1920x.jpg?v=1511801253"/></div>
        <div className="main-content-descriaption"><a href="#">Bluetooth Enabled </a></div>
      </Col>
      <Col xs="6" className="main-content-item">
        <div className="main-content-img"><img src="//cdn.shopify.com/s/files/1/2235/6053/files/subcategory-04_1920x.jpg?v=1511801296"/></div>
        <div className="main-content-descriaption"><a href="#">Rechargeable </a></div>
      </Col>

    </Row>
  </Container>
);

export default MainProduct;
