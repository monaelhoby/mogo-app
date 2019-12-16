import React , {Component} from 'react';
import HotProductsList from '../../../components/Home/HotProductsList'

import {inject,observer} from 'mobx-react';


const HotProductContainer =({hotProducts,...rest})=><HotProductsList {...rest} products={hotProducts.products}/>

export default inject('hotProducts')(observer(HotProductContainer));
// export inject('ShoppingCart')(observer(HotProductContainer));
