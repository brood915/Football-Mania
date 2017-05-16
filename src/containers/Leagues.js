import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Leagues_Table from '../components/Leagues_Table';
import Leagues_Fixtures from '../components/Leagues_Fixtures';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLeague } from '../actions/actions';

class Leagues extends React.Component { 
	constructor(props) {
    super(props);
    this.state = {
 		type: ''
    	}
	}	

	handleClick (e) {
		const type = e.target.getAttribute('data-type');
		if (type === 'tables') {
			this.props.getData('https://api.football-data.org/v1/competitions/' + this.props.league + '/leagueTable', 'data');
		}
		else if (type === 'fixtures') {
			this.props.getData('https://api.football-data.org/v1/competitions/' + this.props.league + '/fixtures', 'data');
		}
		this.setState({type});
	}

    render() {
  		return(<div className='mainContent'>
		  		    <form onChange = {this.props.getLeague}>
		  				<FormGroup controlId="formControlsSelect">
		        				<ControlLabel>Select a league</ControlLabel>
		        				<FormControl componentClass="select" placeholder="select">
		        					<option defaultValue>Find your league!</option>
		  				        <option value="426">English Premier League</option>
		  				        <option value="430">Bundesliga</option>
		  				        <option value="436">La Liga</option>
		  				        <option value="438">Italian Serie A</option>
		  				        <option value="434">France Ligue 1</option>
		  				        <option value="433">Eredivisie</option>
		  					</FormControl>
		  				</FormGroup>
		        		</form>
		        		<div className='btnGroup'>
		        		<Button data-type = 'tables' onClick = {this.handleClick.bind(this)}>Get the table!</Button>
		        		<Button data-type = 'fixtures' onClick = {this.handleClick.bind(this)}>Upcoming Matches!</Button>
		        		</div>
		        		{this.state.type === 'tables' ? <Leagues_Table addLeague = {this.props.addLeague} league = {this.props.league} data = {this.props.data} /> : <Leagues_Fixtures addLeague = {this.props.addLeague} league = {this.props.league} data = {this.props.data} />}
		        		
		  		  </div>);
}
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ addLeague }, dispatch); 
};


export default connect(null, mapDispatchToProps)(Leagues);