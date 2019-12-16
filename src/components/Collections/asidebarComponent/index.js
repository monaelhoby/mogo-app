import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from'./index.module.css';
import CategoriesContainer from '../../../containers/Collections/CategoriesContainer';
import PricesRange from '../PricesRange';
import VendorsContainer from '../../../containers/Collections/VendorsContainer';

class AsidebarComponent extends Component {

    state = {
        show: false
    }

    HiddenAside = () => {
        if (window.pageYOffset >= 2000) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }

    }

    componentDidMount() {
        window.addEventListener('hidden', this.HiddenAside);
    }

    componentWillUnmount() {
        window.removeEventListener('hidden', this.HiddenAside);
    }

    render() {
        return (
          <Container>
            <Row className={styles.wrapper}>
              <Col xs="12" className={styles.wrapper_sidenav}>
                <Row className={`${styles.sidebar} ${this.state.show ? styles.hiddenaside :''} `}>
                  <Col xs="12" className={styles._wrapper}>
                  <h5 className={styles.main_name}>Collections</h5>
                  <CategoriesContainer  />
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Price</h5></li>
                      <li>
                        <PricesRange className={styles.span2}/>
                        </li>
                    </ul>
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Size</h5></li>
                      <li>
                        <Row>
                          <Col xs="6">
                            <ul>
                              <li><label className={styles.container}><a href="#"> XS</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#"> S</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#"> M</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                            </ul>
                          </Col>
                          <Col xs="6">
                            <ul>
                              <li><label className={styles.container}><a href="#"> L</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#"> XL</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#"> XXL</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                            </ul>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Color</h5></li>
                      <li>
                        <ul className={styles.coloring}>
                          <li><label className={styles.container}><a href="#" className={styles.dot}>.</a><input type="checkbox"/><span className={`${styles.checkmark} ${styles.black}`}></span></label></li>
                          <li><label className={styles.container}><a href="#" className={styles.dot}>.</a><input type="checkbox"/><span className={`${styles.checkmark} ${styles.white}`}></span></label></li>
                          <li><label className={styles.container}><a href="#" className={styles.dot}>.</a><input type="checkbox"/><span className={`${styles.checkmark} ${styles.orange}`}></span></label></li>
                          <li><label className={styles.container}><a href="#" className={styles.dot}>.</a><input type="checkbox"/><span className={`${styles.checkmark} ${styles.blue}`}></span></label></li>
                          <li><label className={styles.container}><a href="#" className={styles.dot}>.</a><input type="checkbox"/><span className={`${styles.checkmark} ${styles.grey}`}></span></label></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Price</h5></li>
                      <li>
                        <Row>
                          <Col xs="6">
                            <ul>
                              <li><label className={styles.container}><a href="#">$0-$100</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#">$200-$300</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#">$400-$500</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                            </ul>
                          </Col>
                          <Col xs="6">
                            <ul>
                              <li><label className={styles.container}><a href="#">$100-$200</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                              <li><label className={styles.container}><a href="#">$300-$400</a><input type="checkbox"/><span className={styles.checkmark}></span></label></li>
                            </ul>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Vendor</h5></li>
                    </ul>
                    <VendorsContainer className={styles.vendor}/>
                    <ul className={styles.main_items}>
                      <li><h5 className={styles.cat_name}>Products</h5></li>
                      <li>
                        <Row>
                          <Col xs="6">
                            <ul>
                              <li><img className={styles.product_image} src="//cdn.shopify.com/s/files/1/2235/6053/products/Mi_Power_Bank_2nd_20000mAh_100x.jpg?v=1501862273"/></li>
                            </ul>
                          </Col>
                          <Col xs="6">
                            <ul>
                              <li><a href="" className={styles.product_descriaption}>Mi Power Bank 2nd 20000mAh</a></li>
                              <li><div><samp className={styles.product_price}>$370</samp></div></li>
                            </ul>
                          </Col>
                        </Row>
                      </li>
                      <li className={styles.second_imge}>
                        <Row>
                          <Col xs="6">
                            <ul>
                              <li><img className={styles.product_image} src="//cdn.shopify.com/s/files/1/2235/6053/products/Mi_Power_Bank_2nd_10000mAh_100x.jpg?v=1501861757"/></li>
                            </ul>
                          </Col>
                          <Col xs="6">
                            <ul>
                              <li><a href="" className={styles.product_descriaption}>Powe Bank</a></li>
                              <li><div><samp className={styles.product_price}>$350</samp></div></li>
                            </ul>
                          </Col>
                        </Row>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        );
      }
    }

export default AsidebarComponent;
