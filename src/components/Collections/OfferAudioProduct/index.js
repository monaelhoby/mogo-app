import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import cart1 from '../../../img/icart.png';
import cart2 from '../../../img/cartitem2.png';
import heart1 from '../../../img/heart.png';
import heart2 from '../../../img/hearthover.png';
import eye1 from '../../../img/eye.png';
import eye2 from '../../../img/eyehover.png';

const OfferAudioProduct = (props) => (
  <Container>
    <Row className="product-items">
      <Col xs="12" className="product-item">
        <div className="product-content">
          <div className="overlay2">
            <div className="paragarph">
              <p>{props.title}</p>
            </div>
            <div className="audio-hi3">
              <h3>{props.price} <samp className="old-price">470$</samp></h3>
            </div>
            <div className="commits text-center">
              <a href="#">
                <img src={cart1} />
                <img src={cart2} />
              </a>
              <a href="#">
                <img src={heart1} />
                <img src={heart2} />
              </a>
              <a href="#">
                <img src={eye1} />
                <img src={eye2} />
              </a>
            </div>
          </div>
          <div className="audio-item-sales">
            <div className="new">New</div>
            <div className="hot">Hot</div>
            <div className="sale">On Sale</div>
            <div className="sale float-right">29%</div>
          </div>
          <img  className="img-fluid image-product" src={props.image}
            alt=""/>
        </div>
      </Col>
    </Row>
  </Container>
);

export default OfferAudioProduct;
