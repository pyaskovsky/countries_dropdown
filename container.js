import React, { Component } from 'react';
import DropDown from './dropdown';

class Container extends Component {
  render() {
    return (<div>
      <DropDown />
      <DropDown />
    </div>);
  }
}

export default Container;
