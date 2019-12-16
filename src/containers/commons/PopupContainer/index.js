import React, { Component } from 'react';
import PopupComponent from '../../../components/commons/PopupComponent';
import './index.css';

class PopupContainer extends Component {

  subscribe = () => {
  }
  render() {
    return (
          <PopupComponent onSubscribe={this.subscribe} />
    )
  }
};

export default PopupContainer;