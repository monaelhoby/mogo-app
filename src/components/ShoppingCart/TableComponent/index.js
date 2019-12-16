import React ,{Component} from 'react';
import { Table } from 'reactstrap';
import CustomInput from "../../../components/commons/CustomInput";
import TableList from "../../../containers/ShoppingCard/tableListContainer";
import Styles from "./index.module.css";

class TableComponent extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th className="text-center">Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <TableList />
        </tbody>
      </Table>
    );
  }
}

export default TableComponent;
