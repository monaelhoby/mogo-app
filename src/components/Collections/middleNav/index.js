import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css'
import img1 from '../../../img/menuuu.png'
import img2 from '../../../img/menuu@1X.png'


class MiddleNav extends React.Component {

  render() {
    return(
      <Container>
        <Row className = "mid-bar">
          <Col xs="4" className="sort-div">
            <label className="sort">Sort:</label>

          </Col>
          <Col xs="4" className="showing-div">
            <span className="showing">Showing 12 of 15 results</span>
          </Col>
          <Col xs="4" className="show-div">
            <span className="sort">Show:</span>

            <img src={img1} className="menu-img"/><img src={img2}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MiddleNav;
