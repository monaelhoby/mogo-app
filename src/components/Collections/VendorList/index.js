import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import SingleVendor from '../singleVendor';
import { Container, Row, Col } from 'reactstrap';

const VendorsList=({list})=>(
  <Container>
    <Row>
      <Col xs="6">
        <ul className={styles.main_items}>
          {
              list.map((vendor,index)=><SingleVendor vendor={vendor} key={index}/>)
          }
        </ul>
      </Col>
    </Row>
  </Container>
)

VendorsList.propTypes={
    list:PropTypes.arrayOf(PropTypes.object).isRequired
};
export default VendorsList;
