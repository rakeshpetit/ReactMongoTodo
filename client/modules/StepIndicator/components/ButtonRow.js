import React, { PureComponent } from 'react';
import styles from './ButtonRow.css';

class ButtonRow extends PureComponent {

  render() {
    const { next, prev } = this.props;
    return (
      <div className={styles.listView}>
        <button
          style={{ width: '150px', marginLeft: '10px', backgroundColor: '#3b8d96', fontSize: 'larger', padding: '15px 15px', color: 'white' }}
          onClick={prev} type="button"
        >Previous!</button>
        <button
          style={{ width: '150px', marginLeft: '10px', backgroundColor: '#96593b', fontSize: 'larger', padding: '15px 15px', color: 'white' }}
          onClick={next} type="button"
        >Next!</button>
      </div>

    );
  }
}

export default ButtonRow;
