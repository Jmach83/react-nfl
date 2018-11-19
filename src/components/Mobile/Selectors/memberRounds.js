import React, { Component } from 'react';
import { season1 } from '../../../fakeData/fakeData';
import MemberRounds from '../Tables/memberRounds';


 
export default class FilterSelect extends Component {
  constructor(props){
    super(props)

    this.state = { member: {} }
    this.handleSelect = this.handleSelect.bind(this);
    this.getMember = this.getMember.bind(this);
  }

  handleSelect(event){
    event.preventDefault();
    this.setState({ value: event.currentTarget.value }, () => this.getMember(this.state.value))
  }

  getMember(name){
      this.setState({ member: season1.Members.filter( member => name === member.Name).pop() })          
  }

  render() {    
    return (
      <React.Fragment> 
          <select className='custom-select col-3' onChange={ this.handleSelect }>
            <option hidden>Select member</option>
            <option disabled="disabled" default={true}>Select member</option>
            { season1.Members.map( member => <option key={member.Name}>{member.Name}</option>)}
          </select>

        {Object.getOwnPropertyNames(this.state.member).length > 0 ? 
          <MemberRounds member={this.state.member} fineRates={season1.FineRates}/> : null
        } 
      </React.Fragment>
    );
  }
}