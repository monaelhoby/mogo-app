import React , {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from'./index.module.css';
import ReactImageMagnify from 'react-image-magnify';

const Default={
  default: ReactImageMagnify
} ;

const images = [
  {name: 'wristwatch_355.jpg', vw: '355w'},
  {name: 'wristwatch_481.jpg', vw: '481w'},
  {name: 'wristwatch_584.jpg', vw: '584w'},
  {name: 'wristwatch_687.jpg', vw: '687w'},
  {name: 'wristwatch_770.jpg', vw: '770w'},
  {name: 'wristwatch_861.jpg', vw: '861w'},
  {name: 'wristwatch_955.jpg', vw: '955w'},
  {name: 'wristwatch_1033.jpg', vw: '1033w'},
  {name: 'wristwatch_1112.jpg', vw: '1112w'},
  {name: 'wristwatch_1192.jpg', vw: '1192w'},
  {name: 'wristwatch_1200.jpg', vw: '1200w'}
];

class SingleProductImagesComponent extends Component {
  state = {
    src :"https://cdn.shopify.com/s/files/1/2235/6053/products/Beats_Pill_670x@2x.jpg?v=1501861109",
  }
  handleImage = (event) =>{
    this.setState({src :event.target.src });
  }
  render(){

  return(
  <Container>
    <Row >
      <Col xs="12">
        <a href="#"><i className={`${styles.fas} ${styles.fa_home}`}></i></a> | <span>Beats Pill</span>
      </Col>
    </Row>
    <Row className={styles.beat_descriaption}>
      <Col xs="12" className={styles.left_side}>
        <div href="#" className={styles.beat_img}>
      <div className={styles.perimeter}>
        <div className={styles.image}>
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: this.state.src,
              srcSet: this.srcSet,
              width: 1200,
              height: 1800
            },
            largeImage: {
              alt: '',
              src: this.state.src,
              width: 1200,
              height: 1800
            },
            isHintEnabled: true
          }}/>
        </div>
      </div>
        </div>
        <div className={styles.beat_imgs}>
          <img onClick={this.handleImage} className={styles.productimgsrc} src={this.props.productdetails.images[0]}/>
        </div>
        <div className={styles.beat_imgs}>
          <img onClick={this.handleImage} className={styles.productimgsrc} src={this.props.productdetails.images[1]}/>
        </div>
          <div className={styles.beat_imgs}>
          <img onClick={this.handleImage} className={styles.productimgsrc} src={this.props.productdetails.images[2]}/>
        </div>
        <div className={styles.beat_imgs}>
          <img onClick={this.handleImage} className={styles.productimgsrc} src={this.props.productdetails.images[3]}/>
        </div>
      </Col>
    </Row>
  </Container>
  )}
};

export default SingleProductImagesComponent;
