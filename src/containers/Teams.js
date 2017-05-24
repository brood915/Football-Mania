import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Teams_Info from '../components/Teams_Info';
import Leagues_Form from '../components/Leagues_Form';


const Teams = (props) => {
	function handleData (data) {
		props.getData(data, 'teamInfo');
}


	function handleClick () {
		props.getData(props.team, 'subData');
		props.resetTeamData();
	}

	return (<div className='mainContent'>
	<form onChange = {props.getLeague}>
		<FormGroup controlId="formControlsSelect">
		    <ControlLabel>Select a league</ControlLabel>
				<Leagues_Form dataType ='leagues'/>
		  	<ControlLabel>Select a team</ControlLabel>
		        <FormControl componentClass="select" placeholder="select" data-type='teams'>
		        	<option defaultValue>Find your team!</option>
		        	{props.data.teams && props.data.teams.map((each,index)=>(
		        	<option key = {index.toString()} value = {each['_links'].self.href}>{each.name}</option>))}
		  		</FormControl>
		  </FormGroup>
	</form>
		        <Button className='btnGroup' onClick ={handleClick}>Get the team!</Button>
		        <Teams_Info getData={props.getData} handleData = {handleData} data = {props.subData} teamFixtures = {props.teamFixtures} teamPlayers = {props.teamPlayers} />
		  	</div>)}




export default Teams;