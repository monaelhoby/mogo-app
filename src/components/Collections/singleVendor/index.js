import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css'


const SingleVendor=({vendor})=>(
<li>
<label className={styles.container}>
  <a href="#"> {vendor.name}</a>
  <input type="checkbox"/><
  span className={styles.checkmark}></span></label>
</li>
)

SingleVendor.propTypes={
    category:PropTypes.object.isRequired
};
export default SingleVendor;
