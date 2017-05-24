import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Leagues_Table from '../components/Leagues_Table';
import Leagues_Fixtures from '../components/Leagues_Fixtures';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLeague } from '../actions/actions';
import Leagues_Form from '../components/Leagues_Form';

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
							<Leagues_Form />
		  				</FormGroup>
		        		</form>
		        		<div className='btnGroup'>
		        		<Button data-type = 'tables' onClick = {this.handleClick.bind(this)}>Get the table!</Button>
		        		<Button data-type = 'fixtures' onClick = {this.handleClick.bind(this)}>Upcoming Matches!</Button>
		        		</div>
		        		{this.state.type === 'tables' ? <Leagues_Table savedLeagues = {this.props.leagues} addLeague = {this.props.addLeague} league = {this.props.league} data = {this.props.data} /> : <Leagues_Fixtures savedLeagues = {this.props.leagues} addLeague = {this.props.addLeague} league = {this.props.league} leagueName = {this.props.leagueName} data = {this.props.data} />}
		        		
		  		  </div>);
}
}

const mapStateToProps = (state) => {
   return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams
   };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ addLeague }, dispatch); 
};

Leagues.propTypes = {
	data: PropTypes.object.isRequired,
	getData: PropTypes.func.isRequired,
	league: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
	getLeague: PropTypes.func.isRequired,
	leagues: PropTypes.array,
	addLeague: PropTypes.func,
	leagueName: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);