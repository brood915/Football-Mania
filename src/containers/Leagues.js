import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class Leagues extends React.Component {

	handleClick () {
		fetch('http://api.football-data.org/v1/competitions', {
  		headers: {
    		'X-Auth-Token': '93ec85906d8a472894cad03fdadb19b9'
  			}
		})
		.then((response) => response.json())
		.then((json) => console.log(json[1].caption))
		.catch((err) => console.log('Could not fetch the data!', err)
  		)
	}
	
	render () {
		return (  
		  <div className='mainContent'>
		    <h2>Leagues</h2>
		    <Button onClick = {this.handleClick.bind(this)}bsStyle='primary'>bring</Button>
		  </div>
	  );
}
}


export default Leagues;