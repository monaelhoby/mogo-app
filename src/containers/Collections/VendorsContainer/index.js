import React, { Component } from "react";
import PropTypes from 'prop-types';
import VendorsList  from '../../../components/Collections/VendorList'
import {inject,observer} from 'mobx-react';
import { compose } from 'recompose';





class VendorsContainer extends Component {
  componentDidMount() {
    this.props.vendors.fetchCollections();
  }

  render() {
    let { state, vendors } = this.props.vendors;
    return (
        <div>
          {vendors.counter}
          <VendorsList list={vendors} />
        </div>
      );
      }
      }
export default inject('vendors')(observer(VendorsContainer));


// export default inject('collections')(CategoriesContainer);
