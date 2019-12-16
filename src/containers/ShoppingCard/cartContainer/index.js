import React , {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import TableContainer from "../../../components/ShoppingCart/TableComponent";
import CartSideComponent from "../../../components/ShoppingCart/CartSideComponent";
import Styles from "./index.module.css";

class CartContainer extends Component {
  render(){
      return(
          <div className={Styles.shoppingCard}>
          <Container>
              <h2 className="text-center">Shopping Card</h2>
              <Row>
                  <Col lg="8">
                  <TableContainer />
                  <button className="float-right" type="button" name="button"><a href="#">
                  <i className="fas fa-sync-alt"></i> Update Card</a>
                  </button>
                  </Col>
                  <Col lg="4">
                  <CartSideComponent />
                  </Col>
              </Row>
          </Container>
          </div>
      )
  }
}
export default CartContainer;
