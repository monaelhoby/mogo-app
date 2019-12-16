import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import "./override.css";
import styles from './index.module.css'
class PricesRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  render() {
    return (
      <div className={styles.form}>
            <InputRange
          draggableTrack
          maxValue={20}
          minValue={0}
          onChange={value => this.setState({ value: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value}  className={styles['input-range__slider']}/>
          </div>
    );
  }
}


export default PricesRange;
