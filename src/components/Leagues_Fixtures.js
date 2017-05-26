import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import moment from 'moment';

const Leagues_Fixtures = (props) => {
	let btn; //to render different btns based on whether it is already saved or not
	if (!props.saved && props.data['_links']){ 
		// only if this component is rendered thru Leagues container and [_links] is available
		let found;
		found = props.savedLeagues.some((each)=>
		each.league['_links'].self.href === props.data['_links'].self.href);

		if (found) {
			btn = <Button>Saved!</Button>
		}
		else {
			btn = <Button onClick = {()=>props.addLeague(props.data, 'fixtures', props.leagueName, props.url)}>
		Save
		</Button>
		}
	}	

	return (
	<div className='dataContainer'>
		{(props.data.fixtures) && 
		<div className='data'>
		<h3>{props.leagueName}</h3>
		{props.saved ? //if rendered thru saved container
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
      		<td>{moment(each.date).format("YYYY-MM-DD HH:mm")}</td>
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


Leagues_Fixtures.propTypes = {
  saved: PropTypes.string,
  data: PropTypes.object.isRequired,
  savedLeagues: PropTypes.array,
  addLeague: PropTypes.func,
  removeLeague: PropTypes.func,
  leagueName: PropTypes.string.isRequired,
  url: PropTypes.string
}


export default Leagues_Fixtures;