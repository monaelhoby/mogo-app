import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'

const HeaderAudio = ({}) => (
  <Container className="headeraudiocontainer">
    <Row>
      <Col xs="12" className="headerAudio">
        <div>
          <a href="#"><i className="fas fa-home"></i></a> | <a href="#">Collections </a> |
          <a href="#" active> Autdio </a>
        </div>
        <div className="descriaption">
          <a className="descriaption-image" href="#">
            <img src="//cdn.shopify.com/s/files/1/2235/6053/collections/category-04_1920x.jpg?v=1511776710"/>
          </a>
          <h1>Audio</h1>
          <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores.</p>
        </div>
      </Col>
    </Row>
  </Container>

);

export default HeaderAudio;
