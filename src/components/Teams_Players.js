import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Teams_Players = (props) => (
	<div className='dataContainer'>
	{props.data.players && 
		<div className = 'data'>
		<h2>Squad</h2>
            <div className='btnGroup infoBtn'>
                  <Button>Save</Button>
            </div>
			<table>
      			<tbody>
	        		<tr>
			          <th>Name</th>
			          <th>Number</th>
			          <th>Pos</th>
			          <th>Nationality</th>
			          <th>Contract</th>
	          		</tr>
      {props.data.players.map((each,index) => (
      	<tr key = {index.toString()}>
      		<td>{each.name}</td>
      		<td>{each.jerseyNumber}</td>
      		<td>{each.position}</td>
      		<td>{each.nationality}</td>
      		<td>{each.contractUntil}</td>
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

export default Teams_Players;