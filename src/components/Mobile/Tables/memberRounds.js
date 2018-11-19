import React, { Component } from 'react';
 
export default class MemberRounds extends Component {
  constructor(props){
    super(props)  

    this.sumFines = this.sumFines.bind(this)
    this.drawTable = this.drawTable.bind(this)
  }

  sumFines(fineRates, memberFines){
   var finesTot = []
   memberFines.forEach(function(memberFines){        
     fineRates.forEach(function(fineRate){
        if(memberFines.Type === fineRate.Type){
          finesTot.push(memberFines.Amount * fineRate.Price)
        }
     })     
   });
    return finesTot.reduce((amount, total) => amount + total)
  }

  drawTable(rounds, fineRates){
    return    rounds.map( round => 
                <tr key={round.Round}> 
                  <td>{round.Round}</td>
                  <td> { this.sumFines(fineRates, round.Fines)}</td> 
                </tr>
              )
  }

  render() {    
    return (
        <table className='table'>
            <thead>
              <tr>
                <th>Round</th>
                <th>Fine</th>
              </tr>
            </thead>
            <tbody>
            { this.drawTable(this.props.member.Rounds, this.props.fineRates) }
            </tbody>
        </table>
    );
  }
}