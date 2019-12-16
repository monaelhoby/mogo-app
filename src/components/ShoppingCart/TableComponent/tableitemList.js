import React ,{Component} from 'react';
import SingleItemContainer from "../../../containers/ShoppingCard/SingleItemContainer";


const TableItemList = ({items,...rest}) => {
  return (
      items.map((item,index)=><SingleItemContainer  {...rest} key={index} item={item} />)
  )
}

export default TableItemList;
