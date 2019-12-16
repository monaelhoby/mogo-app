import React , {Component} from 'react';
import TableListItem from '../../../components/ShoppingCart/TableComponent/tableitemList'

import {inject,observer} from 'mobx-react';


const TableList =({cart})=><TableListItem items={cart.Items}/>

export default inject('cart')(observer(TableList));
