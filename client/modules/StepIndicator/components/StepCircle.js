import React, { Component, PropTypes } from 'react';


import styles from './StepCircle.css';

class StepCircle extends Component {

  getVal = () => {
    const { val, current, showAllVals } = this.props;
    if (showAllVals) {
      return val;
    }

    return val === current ? val : 'O';
  }

  render() {
    const { val, current } = this.props;
    return (
      <span className={styles[current === val ? 'circleOn' : 'circleOff']}>{this.getVal()}</span>
    );
  }
}

StepCircle.propTypes = {
  val: PropTypes.string,
  current: PropTypes.string,
  showAllVals: PropTypes.string,
};

export default StepCircle;
