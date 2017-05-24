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

		this.props.getData(this.props.data['_links'].fixtures.href, 'teamFixtures')
		.then
		(()=>this.props.getData(this.props.data['_links'].players.href, 'teamPlayers'))
		.then
		(()=>this.props.addTeam(this.props.data, this.props.teamPlayers, this.props.teamFixtures));
	          
}

	changeBtns () {
		if (!this.props.saved) { //to render diff btns
		// only if this component is rendered thru Teams container
			let found = true;
			found = this.props.teams.some((each)=>
			each.teamInfo.name === this.props.data.name);
			if (found === true) {
				return <Button>Saved!</Button>				
			}
			else {
				return <Button onClick ={this.handleSave}>Save</Button>;	
			}
		} 
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

	hide () {
		this.setState({type:'hidden'});
	}
	
	returnData () {
		if (this.state.type === 'fixtures'){
			return <Teams_Fixtures name = {this.props.data.name} data = {this.props.teamFixtures} />
		}
		else if (this.state.type === 'players'){
			return <Teams_Players name = {this.props.data.name} data = {this.props.teamPlayers}/>
		}
		else {
			return null;
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
							this.changeBtns()
						}
						{this.props.saved && <Button className = {(this.state.type === 'hidden' || this.state.type === '') ? 'hide' : ''} onClick = {this.hide.bind(this)}>Hide</Button>	}
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



Teams_Info.propTypes = {
	data: PropTypes.object.isRequired,
    getData: PropTypes.func,
	teams: PropTypes.array,
	saved: PropTypes.string,
	removeTeam: PropTypes.func,
	teamFixtures: PropTypes.object.isRequired,
	teamPlayers: PropTypes.object.isRequired,
	addTeam: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams_Info);