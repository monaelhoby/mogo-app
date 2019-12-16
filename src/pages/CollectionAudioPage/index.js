import React , {Component}from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './index.module.css'
import AsidebarComponent from '../../components/Collections/asidebarComponent'
import HeaderAudio from '../../components/Collections/HeaderAudioComponent'
import MainProduct from '../../components/Collections/mainAudioProcductComponent'
import MiddleNav from '../../components/Collections/middleNav'
import HotProducts from '../../containers/Home/HotProductsContainer';
class CollectionPage extends Component {


    render() {
        return (
        <Container className={styles.collectionpage}>
          <Row className={styles.sideBar}>
            <Col xs="3">
              <AsidebarComponent/>
            </Col>
          </Row>

          <Row className={styles.headerCollection}>
            <Col>
              <HeaderAudio/>
            </Col>
          </Row>

          <Row className={styles.mainProduct}>
            <Col xs="8">
              <MainProduct/>
            </Col>
          </Row>

          <Row className={styles.middleNav}>
            <Col xs="8">
              <MiddleNav/>
            </Col>
          </Row>

          <Row className={styles.product}>
            <Col   xs={{ size: 10, offset: 2 }} >
              <HotProducts styles={{padding:'20px'}} lg="6" sm="12"/>
              <button className={`${styles.btn} ${styles.loadmore}`}>Load More</button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
export default CollectionPage;
