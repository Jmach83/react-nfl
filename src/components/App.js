import React, { Component } from "react";
import FilterSelect from './Mobile/Selectors/filterSelect';
import MemberRounds from './Mobile/Selectors/memberRounds';
import '../styles/App.css';

export default class App extends Component {

  render() {
      return (
        <React.Fragment>
          <h1>My NFL App!</h1> 
          <div className='row offset-1'>
            <FilterSelect />
            <MemberRounds />
          </div>          
      </React.Fragment>
    );
  }
}