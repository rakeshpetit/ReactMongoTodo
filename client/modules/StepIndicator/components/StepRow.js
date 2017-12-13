import React, { PureComponent } from 'react';
import StepCircle from './StepCircle';
import styles from './ButtonRow.css';

class StepRow extends PureComponent {

  render() {
    const { numbers, current, showAllVals } = this.props;

    return (
      <div className={styles.listView}>
        {
          numbers.map(i => (

            (
            <span>
              <StepCircle val={i} current={current} showAllVals={showAllVals} />
              <span style={{ verticalAlign: 'super' }}>{i !== numbers.length ? '----------------' : ''}</span>
            </span>
            )


          ))
        }
      </div>

    );
  }
}

export default StepRow;
