import React, { Component } from 'react';

class DropDownItem extends Component {
  render() {
    let isSelectedClass = this.props.isSelectedDefault ? 
        'dropdown-list--item dropdown-list--item-is-selected' : 'dropdown-list--item';
    return (
      <div id={this.props.value}
           className={isSelectedClass}
           onClick={this.props.onSelectedValueChanged}>{this.props.text}</div>
    );
  }
}

export default DropDownItem;