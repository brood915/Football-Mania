import React from 'react';
import PropTypes from 'prop-types';        
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import Leagues from './Leagues'; 
import Tournaments from './Tournaments';
import Players from './Players';
import Saved from './Saved';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'whatwg-fetch';

class MainContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: [],
    	league:0
    	}
    this.getData = this.getData.bind(this);
	}

	getData (type) {
		fetch('http://api.football-data.org/v1/' + type, {
  		headers: {
    		'X-Auth-Token': '93ec85906d8a472894cad03fdadb19b9'
  			}
		})
		.then((response) => response.json())
		.then((json) => this.setState({data: json}))
		.then(()=>console.log(this.state.data))
		.catch((err) => console.log('Could not fetch the data!', err)
  		)
	}

	getLeague (e) {
		this.setState({league: Number(e.target.value)});
	}
	

render() {
  return(<div id="main">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/leagues" render={()=><Leagues league = {this.state.league} getLeague = {this.getLeague.bind(this)} data = {this.state.data} getData = {this.getData}/>}/>
        <Route path="/tournaments" render={()=><Tournaments getData = {this.getData}/>}/>
        <Route path="/players" render={()=><Players getData = {this.getData}/>}/>
        <Route path="/saved" component={Saved}/>
        <Footer />
    </div>);
}
}
        
export default connect()(MainContainer);