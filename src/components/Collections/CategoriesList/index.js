import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import SingleCategory from '../SingleCategory';


const CategoriesList=({list})=>(
    <ul className={styles.main_items}>
    {
        list.map((category,index)=><SingleCategory category={category} key={index}/>)
    }
</ul>
)

CategoriesList.propTypes={
    list:PropTypes.arrayOf(PropTypes.object).isRequired
};
export default CategoriesList;