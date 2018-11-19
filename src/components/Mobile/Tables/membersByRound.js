import React, { Component } from 'react';
import { season1 } from '../../../fakeData/fakeData'

export default class MembersByRound extends Component{

    render(){
        return (
            <React.Fragment>
                <h2>Members by round { this.props.round}</h2>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Member</th>
                            <th>FineTypes</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.round != undefined ? 
                    season1.Members.map( member => 
                    <tr key={member.Name}>
                        <td>{ member.Name }</td>                        
                        <td>
                          {  member.Rounds.filter( round => round.Round == this.props.round).pop()
                                .Fines.map( fine => <p>{fine.Type}</p>) }                                
                        </td>
                        <td>
                          {  member.Rounds.filter( round => round.Round == this.props.round).pop()
                                .Fines.map( fine => <p>{fine.Amount}</p> )}
                        </td>
                    </tr>
                    ) : null
                }
                    </tbody>
                </table>


            </React.Fragment>
        );
    }
}