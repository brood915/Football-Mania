import React from 'react';
import PropTypes from 'prop-types';        
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Leagues from './Leagues'; 
import Teams from './Teams';
import Players from './Players';
import Saved from './Saved';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'whatwg-fetch';

class MainContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
      subData: {},
      teamPlayers: {},
      teamFixtures: {},
    	league:0,
      leagueName: '',
      team_url: ''
    	}
    this.getData = this.getData.bind(this);
	}

	getData (url, state) {
		return fetch(url, {
  		headers: {
    		'X-Auth-Token': '93ec85906d8a472894cad03fdadb19b9'
  			}
		})
		.then((response) => response.json())
		.then((json) => this.setState({[state]: json}))
		.then(()=>console.log(this.state[state]))
		.catch((err) => console.log('Could not fetch the data!', err))
	}


resetTeamData () {
  this.setState({teamFixtures: {}, teamPlayers: {}});
}

	getLeague (e) {
    const type = e.target.getAttribute('data-type');
    //for Teams container
    if ( type === 'leagues'){
      this.setState({league: e.target.value},()=>this.getData('https://api.football-data.org/v1/competitions/' + this.state.league + '/teams', 'data'));
    }
    else if ( type === 'teams'){
      this.setState({team_url: e.target.value});
    }
    //for Leagues container
    else {
      const index = e.nativeEvent.target.selectedIndex; //to extract league name
		  this.setState({league: e.target.value, leagueName: e.nativeEvent.target[index].text, data: {}});
      
    }
	}
	

render() {
  return(<div id="main">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/leagues" render={()=><Leagues league = {this.state.league} leagueName = {this.state.leagueName} getLeague = {this.getLeague.bind(this)} data = {this.state.data} getData = {this.getData}/>}/>
        <Route path="/teams" render={()=><Teams resetTeamData = {this.resetTeamData.bind(this)} teamPlayers = {this.state.teamPlayers} teamFixtures = {this.state.teamFixtures} team = {this.state.team_url} getLeague = {this.getLeague.bind(this)} data = {this.state.data} subData = {this.state.subData} teamInfo = {this.state.teamInfo} getData = {this.getData} />}/>
        <Route path="/saved" component={Saved}/>
        <Footer />
    </div>);
}
}
        
export default MainContainer;