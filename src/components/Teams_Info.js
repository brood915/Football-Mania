import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Teams_Fixtures from './Teams_Fixtures';
import Teams_Players from './Teams_Players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTeam, removeTeam } from '../actions/actions';

class Teams_Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type:''
		}

		this.handleType = this.handleType.bind(this);
		this.handleSave = this.handleSave.bind(this);		
	}
	
	handleSave () {
		this.props.getData(this.props.data['_links'].fixtures.href, 'teamFixtures');
		this.props.getData(this.props.data['_links'].players.href, 'teamPlayers');

		setTimeout(() => { // wait for updated props bf adding to redux state
			this.props.addTeam(this.props.data, this.props.teamPlayers, this.props.teamFixtures);
			console.log(this.props.teams);
			console.log(this.props.teamPlayers, this.props.teamFixtures);
		}, 1000);   		
	}

	
	handleType(e) {
		const type = e.target.getAttribute('data-type');
		if (!this.props.saved) {	
			if (type === 'fixtures') {
 				this.props.getData(this.props.data['_links'].fixtures.href, 'teamFixtures');
 			}
 			else if (type === 'players') {
 				this.props.getData(this.props.data['_links'].players.href, 'teamPlayers');
 			}}
		this.setState({type});
	}

	returnData () {
		if (this.state.type === 'fixtures'){
			return <Teams_Fixtures name = {this.props.data.name} data = {this.props.teamFixtures} />
		}
		else if (this.state.type === 'players'){
			return <Teams_Players name = {this.props.data.name} data = {this.props.teamPlayers}/>
		}
	}

	render() {
		return (
	<div className='dataContainer'>
			{this.props.data.name && //to show btns only when the data are available
				<div className='data'>
					<img width='150px' height= '150px' src={this.props.data.crestUrl}/>
					<h3>{this.props.data.name}</h3>
						<div className='btnGroup'>
							<Button data-type='fixtures' onClick = {this.handleType} >Fixtures</Button>
							<Button data-type='players' onClick = {this.handleType} >Players</Button>
							{this.props.saved ? 
							<Button onClick = {()=>this.props.removeTeam(this.props.index)}>
							Delete
							</Button>
							:
							<Button onClick={this.handleSave}>
							Save
							</Button>				
							}	
						</div>
				</div>}
				{this.returnData()}
		</div>
		);
	}
}

const mapStateToProps = (state) => {
   return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams
   };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ addTeam, removeTeam }, dispatch); 
};


export default connect(mapStateToProps, mapDispatchToProps)(Teams_Info);