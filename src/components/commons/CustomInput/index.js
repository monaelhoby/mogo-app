import React, { Component } from "react";
import Styles from "./index.module.css";

class CustomInput extends Component {

componentDidMount(){
  console.log('dadasdsaoioi',this.props.intialValue);
  // this.setState({value:this.props.intialValue?Number(this.props.intialValue):0})
    // this.props.intialValue?this.props.intialValue:

}


  state = {
    value:0,
    min:0,
    max:29
  }

  handleBtnUp = () => {
    let newValue=0;
    if(this.state.value >= this.state.max){
      newValue= this.state.max;
    }else{
      newValue=this.state.value +1;
    }
    this.setState({ value: newValue });

    if(this.props.handleChange){
    this.props.handleChange(newValue);
  }
  }

  handleBtnDown = () => {
    let newValue=0;
    if(this.state.value <= this.state.min){
      newValue= this.state.min;
    }else{
      newValue=this.state.value - 1;
    }
    this.setState({ value: newValue });

    if(this.props.handleChange){
    this.props.handleChange(newValue);
}
  }

  render() {
    return (
      <div className={Styles.quantity}>
        <input type="number" min={this.state.min} max={this.state.max} step="1" value={this.state.value}  />
        <div className={Styles.quantityNav}>
          <div className={`${Styles.quantityButton} ${Styles.quantityUp}`} onClick={this.handleBtnUp}>
            <i class="fas fa-chevron-up"></i>
          </div>
          <div className={`${Styles.quantityButton} ${Styles.quantityDown} `}onClick={this.handleBtnDown}>
            <i clasName="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>

    )
  }
}

export default CustomInput;
