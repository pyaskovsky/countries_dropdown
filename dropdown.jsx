import React, { Component } from 'react';
import DropDownItem from './dropdownItem';
import './dropdown.scss';

import data from './entry';

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      countries: data.countries,
      open: false,
      isSelected: +data.selectedCountryId,
      title: data.selectedCountryId ? 
          data.countries.find(item => item.id === data.selectedCountryId).name :
            'Select country'
    };
    this.isOpen = this.isOpen.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  outsideClick = (e) => {
    console.log('outsideClick');
    if (this.node.contains(e.target)) {
      return;
    }  

    this.setState({
      open: false
    })
  }

  isOpen = () => {
    console.log('isOpen', this.state.open);

    if (!this.state.open) {
      document.addEventListener('click', this.outsideClick, false);
    } else {
      document.removeEventListener('click', this.outsideClick, false);
    }

    this.setState({
      open: !this.state.open
    }) 
  }
 
  onSelectedValueChanged = (e) => {
    console.log('onSelectedValueChanged');
    this.setState({
      title: e.target.innerText,
      isSelected: +e.target.getAttribute('id')
    })
  }

  render() {;
    return (
      <div className={ this.state.open ? "dropdown dropdown-is-opened" : "dropdown"} ref={node => this.node = node}>
        <div className="dropdown--title"
             onClick={this.isOpen}>{this.state.title}</div>
        <div className="dropdown-list">
          {
            this.state.countries.map((country, index) => {
              return(<DropDownItem 
                text={country.name}
                value={country.id}
                key={+country.id}
                onSelectedValueChanged={this.onSelectedValueChanged.bind(this)}
                isSelectedDefault={this.state.isSelected === +country.id} />)
            })
          }
        </div>
      </div>
    );
  }
}

export default DropDown;
