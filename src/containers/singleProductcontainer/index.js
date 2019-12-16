import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import {inject,observer} from 'mobx-react';
import { compose } from 'recompose';
import styles from'./index.module.css'

import SingleProductImageDescraption from '../../components/SingleProduct/singleProductImageDescraption'
import SingleProductImagesComponent from '../../components/SingleProduct/singleProductImage'
import SingleProductTabsDescraption from '../../components/SingleProduct/singleProductTabsDescraption';
import SingleProductSlider from '../../components/SingleProduct/SingleProductSlider';


const SingleProductContiner=({productDetails,...rest})=>{
  return(
    <Container className={styles.SingleProduct}>

  <Row>
    <Col xs="6">
      <SingleProductImagesComponent productdetails={productDetails.productDetails}/>
    </Col>
    <Col xs="6">
      <SingleProductImageDescraption  productdetails={productDetails.productDetails}/>
    </Col>

  </Row>
  <Row >
    <Col xs="12">
      <SingleProductTabsDescraption productdetails={productDetails.productDetails}/>
    </Col>
  </Row>
  <Row className={styles.productSlider}>
    <Col xs="10">
      <SingleProductSlider productdetails={productDetails.productDetails}/>
    </Col>
  </Row>
  </Container>
);
}




export default inject('productDetails')(observer(SingleProductContiner));
