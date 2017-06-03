import React from 'react';
import PropTypes from 'prop-types';
import Leagues_Form from './Leagues_Form';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Saved_Favorite = (props) => {
    const getLeague = (e) => {
        let league = e.target.value;
        let dataType = e.target.getAttribute('data-type');

        if (dataType === "leagues"){
            console.log('leagues!')
            props.getLeague('https://api.football-data.org/v1/competitions/' + league + '/teams');
    
        }

        else {
            console.log('teams!')
        }
        
    }
    
    return (
        <div>
            <h1>Find your favroite team!</h1>
            <form onChange = {getLeague}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select a league</ControlLabel>
                        <Leagues_Form dataType={'leagues'}/>
                    <ControlLabel>Select a team</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" data-type='teams'>
                        <option defaultValue>Find your team!</option>
                        {props.teamNames.length > 0 && props.teamNames.map((each,index)=>(
		        	<option key = {index.toString()} value = {each['_links'].self.href}>{each.name}</option>))}
                    </FormControl>
                </FormGroup>
            </form>
            <Button>Add</Button>
        </div>
    );
};

Saved_Favorite.propTypes = {
  getLeague: PropTypes.func.isRequired,
  teamNames: PropTypes.array
}

export default Saved_Favorite;