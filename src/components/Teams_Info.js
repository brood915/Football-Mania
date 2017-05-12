import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Teams_Fixtures from './Teams_Fixtures';
import Teams_Players from './Teams_Players';


const Teams_Info = (props) => {

	function returnData () {
		if (props.type === 'fixtures'){
			return <Teams_Fixtures name = {props.data.name} data = {props.teamData} />
		}
		else if (props.type === 'players'){
			return <Teams_Players name = {props.data.name} data = {props.teamData}/>
		}
	}

	return (
		<div className='dataContainer'>
			{props.data.name && //to show btns only when the data are available
				<div className='data'>
					<img width='150px' height= '150px' src={props.data.crestUrl}/>
					<h3>{props.data.name}</h3>
					<div className='btnGroup'>
						<Button data-type='fixtures' onClick = {props.handleDataType} >Fixtures</Button>
						<Button data-type='players' onClick = {props.handleDataType} >Players</Button>
					</div>
				</div>}
				{returnData()}
		</div>
	);
}


export default Teams_Info;