import React, { Component } from 'react';
import Switch from '../../components/Switch';


class ToggleComponent extends Component {

  state = { on: false };

  toggleOn = (on) => {
    if (on) {
      return <div>This button is On</div>;
    }
    return null;
  }

  toggleOff = (on) => {
    if (!on) {
      return <div>This button is Off</div>;
    }
    return null;
  }

  toggleButton = (on) => {
    return <Switch on={on} onClick={this.toggle} />;
  }

  toggle = () => {
    console.log('clicked');
    this.setState(({ on }) => ({ on: !on }));
  }

  render() {
    const { on } = this.state;
    return (
      <div>
        {this.toggleOff(on)}
        {this.toggleButton(on)}
        {this.toggleOn(on)}
        <h1>Rak</h1>
      </div>
    );
  }
}

export default ToggleComponent;
