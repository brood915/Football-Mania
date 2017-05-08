import React from 'react';
import PropTypes from 'prop-types';


const Leagues_Table = (props) => (
	<div className='dataContainer'>
		{(props.data.standing) && <table>
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
      }
	</div>
)

export default Leagues_Table;