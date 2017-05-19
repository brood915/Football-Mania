import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Leagues_Table = (props) => {
	let btn; //to render different btns based on whether it is already saved or not
	if (!props.saved){ // only if this component is rendered thru Leagues container
		let found;
		found = props.savedLeagues.some((each)=>
		each.league.leagueCaption === props.data.leagueCaption);

		if (found) {
			btn = <Button>Saved!</Button>
		}
		else {
			btn = <Button onClick = {()=>props.addLeague(props.data, 'tables')}>
		Save
		</Button>
		}
	}

	return (
	<div className='dataContainer'>
		{(props.data.standing) && 
      <div className='data'>
	  	<h3>{props.data.leagueCaption}</h3>
      	{props.saved ? 
		<Button onClick = {()=>props.removeLeague(props.index)}>
		Delete
		</Button>
		:
		btn}
      <table>
      		<tbody>
        		<tr>
		          <th>Pos</th>
		          <th>Team</th>
		          <th>P</th>
		         	<th>W</th>
		         	<th>D</th>
		         	<th>L</th>
		         	<th>F</th>
		         	<th>A</th>
		         	<th>GD</th>
		          	<th>PTS</th>
          		</tr>
          		{props.data.standing.map((each,index) => (<tr key={index.toString()}>
          			<td>{each.position}</td>
          			<td>{each.teamName}</td>
          			<td>{each.playedGames}</td>
          			<td>{each.wins}</td>
          			<td>{each.draws}</td>
          			<td>{each.losses}</td>
          			<td>{each.goals}</td>
          			<td>{each.goalsAgainst}</td>
          			<td>{each.goalDifference}</td>
          			<td>{each.points}</td>
          				</tr>)
          			)
       			}
       		</tbody>
      	</table>
        </div>
      }
	</div>
	)
}

export default Leagues_Table;