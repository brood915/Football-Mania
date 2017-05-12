import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Teams_Fixtures = (props) => (
	<div className='dataContainer'>
	{props.data.fixtures && 
		<div className = 'data'>
		<h2>{props.name} - Fixtures</h2>
			<table>
      			<tbody>
	        		<tr>
			          <th>Time</th>
			          <th>Home</th>
			          <th>Away</th>
			          <th>Result</th>
	          		</tr>
      {props.data.fixtures.map((each,index) => (
      	<tr key = {index.toString()}>
      		<td>{each.date}</td>
      		<td>{each.homeTeamName}</td>
      		<td>{each.awayTeamName}</td>
      		<td>{each.status === 'FINISHED' ? each.result.goalsHomeTeam + ':' + each.result.goalsAwayTeam : 'NA'}</td>
      	</tr>
	      		)
	     	 )
	      }
	            </tbody>
	      	</table>
		</div>
	}
	</div>
)

export default Teams_Fixtures;