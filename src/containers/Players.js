import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';


class Players extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	value: '',
	    	validation: ''
		}
	}

	handleValidation () {
		const length = this.state.value.length;
		if (length > 1 && length < 20) return 'success';
		else if (length > 20) return 'warning';
	    else if (0 < length && length < 2) return 'error';   
	}

	handleChange (e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit (e) {
		e.preventDefault();
		console.log('works');
		this.props.getData('http://jokecamp.github.io/epl-fantasy-geek/js/static-data.json','');
	}

	render() { return (  
	    	<div className='mainContent'>
	      <h4>For now, only EPL players can be found.</h4>
	      <form onSubmit = {this.handleSubmit.bind(this)}>
	        <FormGroup 
	        controlId="formBasicText"
          	validationState={this.handleValidation()}>
	          <ControlLabel>Find your favorite EPL players!</ControlLabel>
	          <FormControl
	            type="text"
	            placeholder="Enter a player's first/last name"
	            value={this.state.value}
	            onChange={this.handleChange.bind(this)}
	          />
	          <FormControl.Feedback />
	          <HelpBlock>Your input should be greater than 1 and less than 20.</HelpBlock>
	        </FormGroup>
	        <Button type='submit' onClick = {this.handleSubmit.bind(this)}>Get the player!</Button>
	      </form>			   
					
			  </div>
		  )
		}
}
export default Players;