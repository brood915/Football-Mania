import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Leagues_Fixtures = (props) => (
	<div className='dataContainer'>
		{(props.data.fixtures) && 
		<div className='data'>
		<h3>{props.leagueName} Upcoming Fixtures</h3>
		{props.saved ? 
		<Button onClick = {()=>props.removeLeague(props.index)}>
		Delete
		</Button>
		:
		<Button onClick = {()=>props.addLeague(props.data, 'fixtures', props.leagueName)}>
		Save
		</Button>}
		    <table>
      			<tbody>
	        		<tr>
			          <th>Time</th>
			          <th>Home</th>
			          <th>Away</th>
	          		</tr>
      {props.data.fixtures
      .filter((each,index) => (each.status !== 'FINISHED'))
      .map((each,index) => (
      	<tr key = {index.toString()}>
      		<td>{each.date}</td>
      		<td>{each.homeTeamName}</td>
      		<td>{each.awayTeamName}</td>


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

export default Leagues_Fixtures;