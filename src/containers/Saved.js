import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeLeague, removeTeam } from '../actions/actions';
import Leagues from './Leagues';
import Teams_Info from '../components/Teams_Info';
import Leagues_Fixtures from '../components/Leagues_Fixtures';


const Saved = (props) => (
  <div className='mainContent'>
    <div className='savedLeagues'>
      {props.leagues.map((each,index) => (<Leagues_Fixtures removeLeague = {props.removeLeague} index = {each.index} saved = 'true' key = {index.toString()} data = {each.league}/>))}
    </div>
  </div>
)



const mapStateToProps = (state) => {
   return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams
   };
};


const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ removeLeague, removeTeam }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);