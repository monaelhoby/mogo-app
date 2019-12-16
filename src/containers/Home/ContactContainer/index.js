import React , {Component} from "react";
import ContactComponent from "../../../components/Home/ContactComponent";
import { Container, Row, Col } from 'reactstrap';
import Phone from "../../../img/c1.png";
import Arrow from "../../../img/c2.png";
import Box from "../../../img/c3.png";
import style from "./index.module.css";

class ContactContainer extends Component {
    render(){
        return(
            <div className={`${style.contacts} text-center`}>
            <Container fluid={true}>
            <Row>
              <Col md="4">
              <ContactComponent src={Phone} header="+(777) 2345 7885" parag="Toll-free hotline. 7 days a week from " strongparag="10.00 a.m. to 6.00 p.m."/>
              </Col>
              <Col md="4">
              <ContactComponent src={Box} header="Free Shipping" parag="Shipping prices for any form of delivery and order’s cost is constant - $49. A free shipping is available for orders " strongparag="more than $99."/>
              </Col>
              <Col md="4">
              <ContactComponent src={Arrow} header="Retirns and Exchange" parag="Any goods, that was bought in our online store, can be returned during " strongparag="30 days" spanparag="since purchase date."/>
              </Col>
                </Row>
                </Container>
                </div>
          
        );
    }
}

export default ContactContainer