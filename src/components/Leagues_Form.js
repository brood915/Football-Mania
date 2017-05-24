import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';

const Form = (props) => (  
		  <div className='mainContent'>
		        <FormControl componentClass="select" placeholder="select" data-type={props.dataType}>
		        	<option defaultValue>Find your league!</option>
		  			<option value="426">English Premier League</option>
		  			<option value="430">Bundesliga</option>
		  			<option value="436">La Liga</option>
		  			<option value="438">Italian Serie A</option>
		  			<option value="434">France Ligue 1</option>
		  			<option value="433">Eredivisie</option>
		  		</FormControl>
		  </div>
	  );



export default Form;