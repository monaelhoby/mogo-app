import React from "react" ;
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Styles from "./index.module.css";
import ImagesLinkList from './ImagesLinkList';
import ParagHeader from './ParagHeader';


const HotProduct = ({product,lg,sm}) => {
   return(
     <Col lg={lg} sm={sm} style={{padding:"0"}}>
     <div className={Styles.content}>
     <div className={Styles.overlay2}>
     <ParagHeader hi3={Styles.hi3} paragarph={Styles.paragarph} parag={product.name} _parag={product.collection}
      header={product.price}/>
     <ImagesLinkList />
     </div>
     <img height="337px" className="img-fluid" src={product.image} alt=""/>
     </div>
     </Col>
   )
}



HotProduct.propTypes={
    product:PropTypes.object.isRequired
};
export default HotProduct ;
