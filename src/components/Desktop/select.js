import React, { Component } from 'react';
import { season1 } from '../../fakeData/fakeData';
import Table from '../Desktop/tablele/table';


 
export default class Select extends Component {
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
          <select className='custom-select' onChange={ this.handleSelect }>
            <option hidden>Select member</option>
            <option disabled="disabled" default={true}>Select member</option>
            { season1.Members.map( member => <option key={member.Name}>{member.Name}</option>)}
          </select>
          
          {Object.getOwnPropertyNames(this.state.member).length > 0 ? 
            <Table member={this.state.member} fineRates={season1.FineRates}/> : null  }  
      </React.Fragment>
    );
  }
}