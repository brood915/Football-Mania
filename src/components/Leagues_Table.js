import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Leagues_Table = (props) => (
	<div className='dataContainer'>
		{(props.data.standing) && 
      <div className='data'>
	  	<h3>{props.data.leagueCaption}</h3>
      	{props.saved ? 
		<Button onClick = {()=>props.removeLeague(props.index)}>
		Delete
		</Button>
		:
		<Button onClick = {()=>props.addLeague(props.data, 'tables')}>
		Save
		</Button>}
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

export default Leagues_Table;