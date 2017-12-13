import React, { PureComponent } from 'react';


import styles from './Toggle.css';

class Toggle extends PureComponent {

  render() {
    return (
      <span onClick={this.props.onClick}>
        <label className={styles[this.props.on ? 'switchOn' : 'switchOff']}>
          <span className={styles[this.props.on ? 'sliderOn' : 'sliderOff']}></span>
        </label>
      </span>
    );
  }
}

export default Toggle;
