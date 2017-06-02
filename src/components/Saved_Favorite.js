import React from 'react';
import PropTypes from 'prop-types';
import Leagues_Form from './Leagues_Form';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Saved_Favorite = (props) => {
    const getLeague = (e) => {
        let league = e.target.value;
        props.getLeague('https://api.football-data.org/v1/competitions/' + league + '/teams');
    }
    
    return (
        <div>
            <h1>Find your favroite team!</h1>
            <form onChange = {getLeague}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select a league</ControlLabel>
                        <Leagues_Form />
                    <ControlLabel>Select a team</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option defaultValue>Find your team!</option>
                        {props.teamNames.length > 0 && props.teamNames.map((each,index)=>(
		        	<option key = {index.toString()} value = {each['_links'].self.href}>{each.name}</option>))}
                    </FormControl>
                </FormGroup>
            </form>
            <Button>Find</Button>
        </div>
    );
};

Saved_Favorite.propTypes = {
  getLeague: PropTypes.func.isRequired,
  teamNames: PropTypes.array
}

export default Saved_Favorite;