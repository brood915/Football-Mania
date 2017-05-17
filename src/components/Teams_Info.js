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
	}
	
	
	handleType(e) {
		const type = e.target.getAttribute('data-type');
		this.setState({type});
	}

	returnData () {
		if (this.state.type === 'fixtures'){
			return <Teams_Fixtures data = {this.props.teamFixtures} />
		}
		else if (this.state.type === 'players'){
			return <Teams_Players data = {this.props.teamPlayers}/>
		}
	}

	render() {
		return (
	<div className='dataContainer'>
			{this.props.data.name && //to show btns only when the data are available
				<div className='data'>
					<img width='150px' height= '150px' src={this.props.data.crestUrl}/>
					<h3>{this.props.data.name}</h3>
						{this.props.saved ? 
						<Button onClick = {()=>this.props.removeTeam(this.props.index)}>
						Delete
						</Button>
						:
						<div className='btnGroup'>
						<Button data-type='fixtures' onClick = {this.handleType} >Fixtures</Button>
						<Button data-type='players' onClick = {this.handleType} >Players</Button>	
						{this.state.type && <Button onClick={()=>this.props.addTeam(this.props.data, this.props.teamData)}>
						Save
						</Button>}					
					</div>}	
				</div>}
				{this.returnData()}
		</div>
		);
	}
}


const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ addTeam, removeTeam }, dispatch); 
};


export default connect(null, mapDispatchToProps)(Teams_Info);