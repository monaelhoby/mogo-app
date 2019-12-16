import React from "react" ;
import PropTypes from 'prop-types';
import HotProduct from '../HotProduct';
import { Container, Row, Col } from 'reactstrap';

import Styles from "./index.module.css";


const HotProductList = ({products,...rest}) => {
   return(
     <div className={Styles.items} style={{textAlign:"center"}}>
         <Container fluid={true}>
         <Row>
            {
              products.map((product,index)=><HotProduct {...rest} key={index} product={product}/>)
            }
         </Row>
         </Container>
         </div>
   )
}



HotProductList.propTypes={
    products:PropTypes.arrayOf(PropTypes.object).isRequired
};
export default HotProductList ;
