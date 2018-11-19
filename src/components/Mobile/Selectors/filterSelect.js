import React, { Component } from 'react';
import { season1 } from '../../../fakeData/fakeData';
import { filterOptions } from '../../Data/filterData'
import MemberRound from '../Tables/memberRounds';
import MembersByRound from '../Tables/membersByRound';


 
export default class FilterSelect extends Component {
  constructor(props){
    super(props)

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event){
    event.preventDefault();
    this.setState({ value: event.currentTarget.value })
  }

  render() {    
    return (
      <React.Fragment> 
          <select className='custom-select col-7' onChange={ this.handleSelect}>
            <option hidden>Filter</option>
            <option disabled="disabled" default={true}>Filter</option>            
            { filterOptions.map( option => <option key={option}>{option}</option>)}
          </select>
      </React.Fragment>
    );
  }
}