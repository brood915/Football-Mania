import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Form = (props) => (  
		  <div className='mainContent'>
		  	<form>
			    <input type='text' name = {props.type} />
			    <Button onClick = {()=>props.getData(props.type)} bsStyle='primary'>Search</Button>
		    </form>
		  </div>
	  );



export default Form;