import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Leagues = (props) => (  
		  <div className='mainContent'>
		    <h2>Leagues</h2>
		    <Button onClick = {()=>props.getData('competitions')} bsStyle='primary'>bring</Button>
		  </div>
	  );



export default Leagues;