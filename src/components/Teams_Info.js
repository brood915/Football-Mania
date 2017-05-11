import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const Teams_Info = (props) => {

	function handleClick () {
		props.getData(props.data['_links'].fixtures, 'subData');
		console.log(props.data);
}

	return (
	<div className='dataContainer'>
		{props.data.name && //to show btns only when the data are available
			<div className='data'>
				<img width='150px' height= '150px' src={props.data.crestUrl}/>
				<h3>{props.data.name}</h3>
				<div className='btnGroup'>
					<Button onClick = {handleClick}>Fixtures</Button>
					<Button>Players</Button>
				</div>
			</div>}
	</div>
);}

export default Teams_Info;