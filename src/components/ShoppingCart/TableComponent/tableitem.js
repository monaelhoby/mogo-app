import React, { Component } from "react";
import { Table } from "reactstrap";
import CustomInput from "../../commons/CustomInput";

const TableItem = ({ item, handleQuantityChange, removeItem }) => {
  return (
    <tr>
      <th scope="row" className="d-flex">
        <a
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={removeItem}
        >
          <i className="fas fa-trash" />
        </a>
        <img src={item.productImage} alt="..." />
        <p style={{ paddingLeft: "20px", width: "70%" }}>{item.productName}</p>
      </th>
      <td className="text-center">{item.productPrice}</td>
      <td className="text-center">
        <CustomInput
          handleChange={handleQuantityChange}
          intialValue={item.productQuantity}
        />
      </td>
      <td class="text-center">{item.productTotal}</td>
    </tr>
  );
};

export default TableItem;
