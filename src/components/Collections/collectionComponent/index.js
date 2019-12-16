import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
// import FontAwesome from 'react-fontawesome';

var FontAwesome = require('react-fontawesome');

const CollectionComponent = ({title}) => (
  <div className={styles.main}>{title}
    <FontAwesome
  className='super-crazy-colors'
  name='rocket'
  size='2x'
  spin
  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
/></div>
);

export default CollectionComponent;


CollectionComponent.propTypes={
   title:PropTypes.string.isRequired
 }
