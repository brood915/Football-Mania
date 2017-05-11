import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Teams = (props,e) => 
(<div className='mainContent'>
	<form onChange = {props.getLeague}>
		<FormGroup controlId="formControlsSelect">
		    <ControlLabel>Select a league</ControlLabel>
		        <FormControl componentClass="select" placeholder="select" data-type ='leagues'>
		        	<option defaultValue>Find your league!</option>
		  			<option value="426">English Premier League</option>
		  			<option value="430">Bundesliga</option>
		  			<option value="436">La Liga</option>
		  			<option value="438">Italian Serie A</option>
		  			<option value="434">France Ligue 1</option>
		  			<option value="433">Eredivisie</option>
		  		</FormControl>
		  		<ControlLabel>Select a team</ControlLabel>
		        <FormControl componentClass="select" placeholder="select" data-type='teams'>
		        	<option defaultValue>Find your team!</option>
		        	{props.data.teams && props.data.teams.map((each,index)=>(
		        	<option key = {index.toString()} value = {each['_links'].self.href}>{each.name}</option>))}
		  		</FormControl>
		  </FormGroup>
	</form>
		        <Button data-type = 'tables' >Get the team!</Button>
		  	</div>
);

export default Teams;