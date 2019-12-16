import React, { Component } from "react";
import TableItem from "../../../components/ShoppingCart/TableComponent/tableitem";
import { inject, observer } from "mobx-react";


const SingleItemContainer = ({ item, cart }) => {
 let items = cart.Items
  return(
     <TableItem
      handleQuantityChange={quantity => cart.setItemQuantity(item, quantity)}
      item={item}
      removeItem={items => cart.removeItem(item)}
      addtem={items => cart.addItem(item)}
    />
  )
  };

export default inject("cart")(SingleItemContainer);
     
