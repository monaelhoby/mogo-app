import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css'


const SingleCategory=({category})=>(
<li> <label className={styles.container}><a href="#"> {category.name}</a><input type="checkbox"/><span className={styles.checkmark}></span></label>
</li>
)

SingleCategory.propTypes={
    category:PropTypes.object.isRequired
};
export default SingleCategory;