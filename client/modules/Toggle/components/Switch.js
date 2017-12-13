import React, { PureComponent, PropTypes } from 'react';
import Toggle from './Toggle';

class Switch extends PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Toggle on={this.props.on} onClick={this.props.onClick} />
      {children}
      </div>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.object,
  on: PropTypes.boolean,
  onClick: PropTypes.function
};

export default Switch;
