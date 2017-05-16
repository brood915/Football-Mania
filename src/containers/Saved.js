import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeLeague, removeTeam } from '../actions/actions';
import Teams_Info from '../components/Teams_Info';
import Leagues_Fixtures from '../components/Leagues_Fixtures';
import Leagues_Table from '../components/Leagues_Table';


const Saved = (props) => {

  const fixtures = props.leagues.filter((each,index) => (each.type === 'fixtures'));
  const tables = props.leagues.filter((each,index) => (each.type === 'tables'));

  return (
  <div className='mainContent'>
    {props.leagues.length > 0 && 
    <div>
        <div className='saved'>
          <h2 className={fixtures.length > 0 ? '' : 'hide'}>League Fixtures</h2>
          {fixtures.map((each,index) => (<Leagues_Fixtures removeLeague = {props.removeLeague} index = {each.index} saved = 'true' key = {index.toString()} data = {each.league}/>))}
        </div>
        <div className={fixtures.length > 0 && tables.length > 0 ? 'divider' : 'hide'}></div>
        <div className='saved'>
          <h2 className={tables.length > 0 ? '' : 'hide'}>League Tables</h2>
          {tables.map((each,index) => (<div><Leagues_Table removeLeague = {props.removeLeague} index = {each.index} saved = 'true' key = {index.toString()} data = {each.league}/></div>))}
        </div>
    </div>}
  </div>
)}



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