import React, { Component, PropTypes } from 'react';
import StepRow from '../../components/StepRow';
import ButtonRow from '../../components/ButtonRow';

class StepIndicatorPage extends Component {

  state = { current: 1, numbers: [1, 2, 3, 4, 5], showAllVals: true };

  next = () => {
    const { current, numbers } = this.state;
    if (current !== numbers.length) {
      this.setState({ ...numbers, current: current + 1 });
    }
  }

  prev =() => {
    const { current, numbers } = this.state;
    if (current !== numbers[0]) {
      this.setState({ ...numbers, current: current - 1 });
    }
  }

  render() {
    const { current, numbers, showAllVals } = this.state;
    return (
      <div>
        <h1>Rak</h1>
        <StepRow numbers={numbers} current={current} showAllVals={showAllVals} />
        <ButtonRow next={this.next} prev={this.prev} />
      </div>
    );
  }
}

StepIndicatorPage.propTypes = {
  numbers: PropTypes.string,
  current: PropTypes.string,
};

export default StepIndicatorPage;
