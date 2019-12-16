import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from'./index.module.css'
import cart1 from '../../../img/cart.png'
import cart2 from '../../../img/cart2.png'
import heart1 from '../../../img/heart.png'
import heart2 from '../../../img/hearthover.png'
import layer from '../../../img/Layer 69@1X.png'
import  CustomInput from '../../commons/CustomInput'
const SingleProductImageDescraption = ({productdetails,...rest}) => (
<div>
          <div className={styles.first_line}>
            SKU:
            <div className={styles.number}>{productdetails.sku}</div>
            <div className={styles.availability}> Availability:</div>
            <div className={styles.green}>In Stock</div>
          </div>
          <div className={styles.beat_pill}><strong>Beats Pill</strong></div>
          <div className={styles.Add}><a href="#" className={styles.Add}>Add Your Review</a></div>
          <div className={styles.price}>${productdetails.pricing}</div>
          <div>
            <label className={styles.note_label}>Notes:</label>
            <input type="text" className={styles.note}/>
          </div>
          <div>
            <div className={styles.quantity}>
              <CustomInput/>
            </div>
            <div className={styles.add_div}>
              <button className={styles.add_btn}>
                <a href="#" className={styles.add_link}>
                  <img src={cart1} className={styles.cart1}/>
                  <img src={cart2}className={styles.cart2}/>
                    Add to Cart
                </a>
              </button>
              <div className={styles.heart_div}>
                <a href="#" className={styles.heart}>
                  <img src={heart1} className={styles.heart1} />
                  <img src={heart2} className={styles.heart2} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.Layer_img}> <img src={layer} /></div>
</div>
);

export default SingleProductImageDescraption;
