import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Leagues_Table from '../components/Leagues_Table';

const Leagues = (props) => (  
		  <div className='mainContent'>
		    <form onChange = {props.getLeague}>
				<FormGroup controlId="formControlsSelect">
      				<ControlLabel>Select a league</ControlLabel>
      				<FormControl componentClass="select" placeholder="select">
      					<option selected='selected'>Find your league!</option>
				        <option value="426">English Premier League</option>
				        <option value="430">Bundesliga</option>
				        <option value="436">La Liga</option>
				        <option value="438">Italian Serie A</option>
				        <option value="434">France Ligue 1</option>
				        <option value="433">Eredivisie</option>
					</FormControl>
				</FormGroup>
      		</form>
      		<Button onClick = {()=>props.getData('competitions/' + props.league + '/leagueTable')}>Get the table!</Button>
      		<Leagues_Table data = {props.data} />
		  </div>
	  );



export default Leagues;