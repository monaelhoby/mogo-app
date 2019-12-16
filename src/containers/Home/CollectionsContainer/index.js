import React, { Component } from "react";
import CollectionComponent from "../../../components/Home/CollectionComponent";
import { Container, Row, Col } from 'reactstrap';
import "./index.css";

class ProductContainer extends Component {
  render(){
    return(
      <div className="Products">
       <Container fluid={true}>
         <Row>
         <Col md="8">
          <div className="twoImages clearfix">
          <div className="float-left">
          <CollectionComponent heading="Watches" numb="25" product="products"
          src="http://cdn.shopify.com/s/files/1/2235/6053/files/promobox-01_640x.jpg?v=1504619436" />
          </div>
          <div className="float-right">
          <CollectionComponent heading="Trackers" numb="18" product="products"
          src="http://cdn.shopify.com/s/files/1/2235/6053/files/promobox-02_399c6903-2f5e-4b92-8237-e28c8c4d1291_640x.jpg?v=1505756929" />
          </div>
          </div>
          <div className="oneImage">
          <CollectionComponent heading="Headphones" numb="37" product="products" style={{color:"#FFF !important"}}
          src="http://cdn.shopify.com/s/files/1/2235/6053/files/promobox-03_1280x.jpg?v=1504619436" />
          </div>
         </Col>
         <Col md="4" className="heighestImg">
         <CollectionComponent heading="Earphones" numb="58" product="products" style={{color:"#FFF !important"}}
         src="//cdn.shopify.com/s/files/1/2235/6053/files/promobox-04_1e4f69c9-1988-440a-afb6-4398f01e5872_640x.jpg?v=1505756945" />
         </Col>
         </Row>
         </Container>
      </div>
    )
  }
}

export default ProductContainer;
