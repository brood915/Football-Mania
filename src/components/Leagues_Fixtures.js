import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Leagues_Fixtures = (props) => {
	let btn; //to render different btns based on whether it is already saved or not
	if (!props.saved && props.data['_links']){ 
		// only if this component is rendered thru Leagues container and [_links] is available
		let found;
		found = props.savedLeagues.some((each)=>
		each.league['_links'].self.href === props.data['_links'].self.href);

		if (found) {
			btn = <Button>Already Saved</Button>
		}
		else {
			btn = <Button onClick = {()=>props.addLeague(props.data, 'fixtures', props.leagueName)}>
		Save
		</Button>
		}
	}	

	return (
	<div className='dataContainer'>
		{(props.data.fixtures) && 
		<div className='data'>
		<h3>{props.leagueName}</h3>
		{props.saved ? 
		<Button onClick = {()=>props.removeLeague(props.index)}>
		Delete
		</Button>
		:
		btn}
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
)}

export default Leagues_Fixtures;