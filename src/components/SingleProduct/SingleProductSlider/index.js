import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import styles from './index.module.css'
import cart1 from '../../../img/cart2.png'
import cart2 from '../../../img/cart-hover.png'
import heart from '../../../img/heart.png'
import hearthover from '../../../img/hearthover.png'
import eye from '../../../img/eye.png'
import eyehover from '../../../img/eyehover.png'
import './override.css'
const flickityOptions = {
    initialIndex: 2
}

class SingleProductSlider extends Component{
  render()
  {
    return (
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
      >

            <div className={styles.product_item}>
              <div className={styles.content}>

                <div className={styles.overlay2}>
                  <div className={styles.paragarph}>
                    <p>Huawei Smart Watch</p>
                  </div>
                  <div className={styles.hi3}>
                    <h3>270$</h3>
                  </div>
                  <div className={styles.commits}>
                    <a href="#">
                      <img src={cart1} />
                      <img src={cart2} />
                    </a>
                    <a href="#">
                      <img src={heart} />
                      <img src={hearthover} />
                    </a>
                    <a href="#">
                      <img src={eye} />
                      <img src={eyehover} />
                    </a>
                  </div>
                </div>
                <img height="337px" className={styles.img_fluid} src={this.props.productdetails.images[0]}
                            alt=""/>
              </div>

            </div>

            <div className={styles.product_item}>
              <div className={styles.content}>

                <div className={styles.overlay2}>
                  <div className={styles.paragarph}>
                    <p>Huawei Smart Watch</p>
                  </div>
                  <div className={styles.hi3}>
                    <h3>270$</h3>
                  </div>
                  <div className={styles.commits}>
                    <a href="#">
                      <img src={cart1} />
                      <img src={cart2} />
                    </a>
                    <a href="#">
                      <img src={heart} />
                      <img src={hearthover} />
                    </a>
                    <a href="#">
                      <img src={eye} />
                      <img src={eyehover} />
                    </a>
                  </div>
                </div>
                <img height="337px" className={styles.imgfluid} src="//cdn.shopify.com/s/files/1/2235/6053/products/Mi_Power_Bank_2nd_20000mAh_480x480.jpg?v=1501862273"
                              alt=""/>
              </div>
            </div>
            <div className={styles.product_item}>
              <div className={styles.content}>

                <div className={styles.overlay2}>
                  <div className={styles.paragarph}>
                    <p>Huawei Smart Watch</p>
                  </div>
                  <div className={styles.hi3}>
                    <h3>270$</h3>
                  </div>
                  <div className={styles.commits}>
                    <a href="#">
                      <img src={cart1} />
                      <img src={cart2} />
                    </a>
                    <a href="#">
                      <img src={heart} />
                      <img src={hearthover} />
                    </a>
                    <a href="#">
                      <img src={eye} />
                      <img src={eyehover} />
                    </a>
                  </div>
                </div>
                <img height="337px" className={styles.imgfluid} src="//cdn.shopify.com/s/files/1/2235/6053/products/Huawei_TalkBand_B2_Smart_Bracelet_480x480.jpg?v=1501861438"
                          alt=""/>
              </div>
            </div>
            <div className={styles.product_item}>
              <div className={styles.content}>

                <div className={styles.overlay2}>
                  <div className={styles.paragarph}>
                    <p>Huawei Smart Watch</p>
                  </div>
                  <div className={styles.hi3}>
                    <h3>270$</h3>
                  </div>
                  <div className={styles.commits}>
                    <a href="#">
                      <img src={cart1} />
                      <img src={cart2} />
                    </a>
                    <a href="#">
                      <img src={heart} />
                      <img src={hearthover} />
                    </a>
                    <a href="#">
                      <img src={eye} />
                      <img src={eyehover} />
                    </a>
                  </div>
                </div>
                <img height="337px" className={styles.imgfluid} src="//cdn.shopify.com/s/files/1/2235/6053/products/Xiaomi_Portable_Mini_Wireless_Bluetooth_Speaker_480x480.jpg?v=1501862747"
                            alt=""/>
              </div>
            </div>
      </Flickity>

    )
  }
}
export default SingleProductSlider;
