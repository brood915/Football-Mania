import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Teams_Fixtures = (props) => (
	<div className='dataContainer'>
	{props.data.fixtures && 
		<div className = 'data'>
		<h2>Fixtures</h2>
		<div>
			<span className = 'resultColor' style = {{'borderLeft': '10px solid blue'}}> = W</span>
			<span className = 'resultColor' style = {{'borderLeft': '10px solid red'}}> = L</span>
			<span className = 'resultColor' style = {{'borderLeft': '10px solid gray'}}> = D</span>
		</div>
            <div className='btnGroup infoBtn'>
                  <Button>Save</Button>
                  <Button>Upcoming</Button>
            </div>
			<table>
      			<tbody>
	        		<tr>
			          <th>Time</th>
			          <th>Home</th>
			          <th>Away</th>
			          <th>Result</th>
	          		</tr>
      {props.data.fixtures.map((each,index) => { 
			
      		function getResult () {
      			let color = '';

      	      	if (each.result.goalsHomeTeam !== each.result.goalsAwayTeam){
      	      		let result = '';

      	      		if (each.result.goalsHomeTeam > each.result.goalsAwayTeam){
      	      		    result = each.homeTeamName;
      	      		}
      	      		else if (each.result.goalsHomeTeam < each.result.goalsAwayTeam){
      	      			result = each.awayTeamName;
      	      		}

      	      		color = result === props.name ? 'blue' : 'red';
      	      	}
  
      	      	else if (each.result.goalsHomeTeam !== null && each.result.goalsHomeTeam === each.result.goalsAwayTeam){
      	      			color = 'gray';
      	      	}
      	      	
      	      	else {
      	      		color = 'black';
      	      	}

      	      	return color;			
		}


      	return (
            	<tr key = {index.toString()}>
            		<td>{each.date}</td>
            		<td>{each.homeTeamName}</td>
            		<td>{each.awayTeamName}</td>
            		<td style = {{'color': getResult()}}>{each.result.goalsHomeTeam !== null ? each.result.goalsHomeTeam + ':' + each.result.goalsAwayTeam : 'NA'}</td>
            	</tr>
      	      		); 
      	      	}
	     	 )
	      }
	            </tbody>
	      	</table>
		</div>
	}
	</div>
)

export default Teams_Fixtures;