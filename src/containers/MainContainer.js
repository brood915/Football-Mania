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
      teamInfo: {},
    	league:0,
      team_url: ''
    	}
    this.getData = this.getData.bind(this);
	}

	getData (url, state) {
		fetch(url, {
  		headers: {
    		'X-Auth-Token': '93ec85906d8a472894cad03fdadb19b9'
  			}
		})
		.then((response) => response.json())
		.then((json) => this.setState({[state]: json}))
		.then(()=>console.log(this.state.data))
		.catch((err) => console.log('Could not fetch the data!', err)
  		)
	}

	getLeague (e) {
    const type = e.target.getAttribute('data-type');
    if ( type === 'leagues'){
      this.setState({league: Number(e.target.value)},()=>this.getData('https://api.football-data.org/v1/competitions/' + this.state.league + '/teams', 'data'));
    }
    else if ( type === 'teams'){
      this.setState({team_url: e.target.value});
    }
    else {
		  this.setState({league: Number(e.target.value)});
    }
	}
	

render() {
  return(<div id="main">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/leagues" render={()=><Leagues league = {this.state.league} getLeague = {this.getLeague.bind(this)} data = {this.state.data} getData = {this.getData}/>}/>
        <Route path="/teams" render={()=><Teams team = {this.state.team_url} league = {this.state.league} getLeague = {this.getLeague.bind(this)} data = {this.state.data} subData = {this.state.subData} teamInfo = {this.state.teamInfo} getData = {this.getData} />}/>
        <Route path="/players" render={()=><Players getData = {this.getData} data = {this.state.data}/>}/>
        <Route path="/saved" component={Saved}/>
        <Footer />
    </div>);
}
}
        
export default connect()(MainContainer);