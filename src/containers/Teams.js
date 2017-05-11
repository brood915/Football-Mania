import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Teams_Info from '../components/Teams_Info';

class Teams extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
 		type: ''
    	}
    this.handleClick = this.handleClick.bind(this);
    this.handleDataType = this.handleDataType.bind(this);
	}

handleDataType (e) {
	const type = e.target.getAttribute('data-type');
	if (type === 'fixtures') {
		this.props.getData(this.props.subData['_links'].fixtures.href, 'teamInfo');
	}

	else if (type === 'players') {
		this.props.getData(this.props.subData['_links'].players.href, 'teamInfo');
	}

	console.log(this.props.teamInfo);
	this.setState({type});
}


handleClick () {
	this.props.getData(this.props.team, 'subData');
	console.log(this.props.subData);
	this.setState({type:''});
}

render(){
return (<div className='mainContent'>
	<form onChange = {this.props.getLeague}>
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
		        	{this.props.data.teams && this.props.data.teams.map((each,index)=>(
		        	<option key = {index.toString()} value = {each['_links'].self.href}>{each.name}</option>))}
		  		</FormControl>
		  </FormGroup>
	</form>
		        <Button onClick ={this.handleClick}>Get the team!</Button>
		        <Teams_Info type = {this.state.type} handleDataType = {this.handleDataType} getData = {this.props.getData} data = {this.props.subData} teamData = {this.props.teamInfo} />
		  	</div>
		);
	}
}

export default Teams;