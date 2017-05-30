import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeLeague, removeTeam, update  } from '../actions/actions';
import Teams_Info from '../components/Teams_Info';
import Leagues_Fixtures from '../components/Leagues_Fixtures';
import Leagues_Table from '../components/Leagues_Table';
import Teams_Fixtures from '../components/Teams_Fixtures';
import Teams_Players from '../components/Teams_Players';
import Saved_Form from '../components/Saved_Form';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all'
    }
  }


  update () {
        const leagueURLs = this.props.leagues.map(each=>each.url);
        const teamFixturesURLs = this.props.teams.map(each=>each.teamInfo['_links'].fixtures.href);
        const teamPlayersURLs = this.props.teams.map(each=>each.teamInfo['_links'].players.href);
        const urls = [...leagueURLs, ...teamFixturesURLs, ...teamPlayersURLs];
       this.props.update(urls);
       console.log(this.props.teams);
  }

  handleChange (e) {
        let selected = e.target.value;
        this.setState({selected});
    }

  render () {
    const fixtures = this.props.leagues.filter((each,index) => (each.type === 'fixtures'));
    const tables = this.props.leagues.filter((each,index) => (each.type === 'tables'));
    const teams = this.props.teams;

if (!this.props.loading && !this.props.error)//if not loading
    {return (
  <div className='mainContent'>
    <Saved_Form handleChange = {this.handleChange.bind(this)}/>
    {(this.props.leagues.length > 0 || this.props.teams.length > 0) && <Button onClick = {this.update.bind(this)}>Update Data!</Button> }
    {this.props.leagues.length > 0 && 
    <div className ='savedLeagues'>
        <div className = {'saved ' + (this.state.selected === 'fixtures' || this.state.selected === 'all' ? '' : 'hide')}>
          <h1 className={fixtures.length > 0 ? '' : 'hide'}>League Upcoming Fixtures</h1>
          {fixtures.map((each,index) => (<Leagues_Fixtures leagueName = {each.leagueName} removeLeague = {this.props.removeLeague} index = {each.index} saved = 'true' key = {index.toString()} data = {each.league}/>))}
        </div>
        <div className={'saved ' + (this.state.selected === 'tables' || this.state.selected === 'all' ? '' : 'hide')}>
          <h1 className={tables.length > 0 ? '' : 'hide'}>League Tables</h1>
          {tables.map((each,index) => (<Leagues_Table removeLeague = {this.props.removeLeague} index = {each.index} saved = 'true' key = {index.toString()} data = {each.league}/>))}
        </div>
    </div>}
    {teams.length > 0 &&
    <div className={'saved ' + (this.state.selected === 'teams' || this.state.selected === 'all' ? '' : 'hide')}>
        <h1 className={teams.length > 0 ? '' : 'hide'}>Teams</h1>
          {teams.map((each,index) => 
            (
            <Teams_Info removeTeam = {this.props.removeTeam} teamPlayers = {each.teamPlayers} teamFixtures = {each.teamFixtures} index = {each.index} saved = 'true' key = {index.toString()} data = {each.teamInfo}/>))}
    </div>}
    {this.props.leagues.length === 0 && this.props.teams.length === 0 && //when no data saved
      <h1>Add your favorite information here!</h1>
    }
  </div>
)}

else if (this.props.loading) { //if loading
  return <div className='mainContent'>
				    <FontAwesome name='spinner' size='4x' pulse/>
         </div>
}

else if (this.props.error) { //if error occured
 return <h1 className='mainContent'>Something Went Wrong!!</h1>
}


}}



const mapStateToProps = (state) => {
   return {
    leagues: state.leagues.leagues,
    teams: state.teams.teams,
    loading: state.handleLoading,
    error: state.handleError
   };
};


const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ removeLeague, removeTeam, update }, dispatch); 
};


Saved.propTypes = {
  teams: PropTypes.array,
  leagues: PropTypes.array,
  removeLeague: PropTypes.func.isRequired,
  removeTeam: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Saved);