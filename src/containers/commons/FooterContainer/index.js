import React from "react" ;
import { Container, Row, Col } from 'reactstrap';
import FooterUL from "../../../components/commons/footer/footerComponent/footerUL" ;
import SocialLink from "../../../components/commons/SocialLinks";
import Form from "../../../components/commons/Form";
import Styles from "./index.module.css";

const FooterContainer =  () => {
  return (
    <footer>
    <Container>
    <Row>
      <Col lg="2" md="3" sm="4">
        <img height="45px" width="130px" src="//cdn.shopify.com/s/files/1/2235/6053/files/Logo260px_130x.png?v=1503914493"
          alt="logo" />
      </Col>
      <Col lg="2" md="3" sm="4">
      <FooterUL item1="About Us" item2="Customer Service" item3="Privacy Policy" item4="Site Map" 
      item5="Search Terms" item6="Advanced Search" item7="Orders and Returns" item7="Contact Us" />
       </Col>
      <Col lg="2" md="3" sm="4">
      <FooterUL item1="Shipping & Returns" item2="Secure Shopping" item3="International Shipping"
         item4="Affiliates" item4="Group Sales" />
      </Col>
      <Col lg="2" md="3" sm="3">
      <FooterUL item1="Sign In" item2="View Cart" item3="My Wishlist" item4="Track My Order"
      item1="Help" />
      </Col>
      <Col lg="4" md="12" sm="9">
        <h4>Newsletter Signup</h4>
        <p style={{width:"85%"}}>
          Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a <span>15%
            discount</span> on the next order after you sign up.
        </p>
        <Form />
        <div className={Styles.sociallinks}>
        <SocialLink iconclass="fab fa-facebook-f" />
        <SocialLink iconclass="fab fa-google-plus-g" />
        <SocialLink iconclass="fab fa-twitter" />
        <SocialLink iconclass="fab fa-instagram" />
        <SocialLink iconclass="fab fa-youtube" />
        <SocialLink iconclass="fab fa-pinterest-p" />
        <SocialLink iconclass="fab fa-skype" />
        <SocialLink iconclass="fab fa-behance" />
        </div>
      </Col>
      <p style={{fontSize:"12px"}}>Copyright © 2018, <span style={{color :"#FE5A1A"}}>mogo1 Powered by Shopify</span></p>
    </Row>
  </Container>
</footer>
  )
};

export default FooterContainer;
