import React , {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImagesLink from "./ImagesLink";
import Cart from "../../../img/icart.png";
import CartHover from "../../../img/cartitem2.png";
import MCart from "../../../img/cart.png";
import MCartHover from "../../../img/cart-hover.png";
import Styles from "./index.module.css";

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div style={{display:"inline-block",float:"left",left:"200%"}}>
        <Button onClick={this.toggle} className={Styles.btn}>
          <ImagesLink src1={Cart} src2={CartHover}/>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{textAlign:"center"}}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
          <h5>Added To Card Successfuly!</h5>
              <div className={Styles.firstLink}>
                <a href="/shoppingcart">
                  <img src={MCart} className={Styles.img1} />
                  <img src={MCartHover} className={Styles.img2}  />
                    <span>View Card</span>
                    </a>
              </div>
              <div className={Styles.secondLink}>
                <a href="#">Continue Shopping</a>
              </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalContainer;
