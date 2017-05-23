import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Teams_Results from './Teams_Results';
import moment from 'moment';


class Teams_Fixtures extends React.Component {

constructor(props) {
    super(props);
    this.state = {
            upcoming: false
      }
}     


filterFixtures () {
      this.setState({upcoming:!this.state.upcoming});
}


render() {
      return (
      <div className='dataContainer'>
      {this.props.data.fixtures && 
            <div className = 'data'>
            <h2>Fixtures</h2>
            <div>
                  <span className = 'resultColor' style = {{'borderLeft': '10px solid blue'}}> = W</span>
                  <span className = 'resultColor' style = {{'borderLeft': '10px solid red'}}> = L</span>
                  <span className = 'resultColor' style = {{'borderLeft': '10px solid gray'}}> = D</span>
            </div>
            <Teams_Results fixtures = {this.props.data.fixtures} name = {this.props.name} />
                  <Button className='btnGroup' onClick={this.filterFixtures.bind(this)}>
                  {this.state.upcoming === false ? 'Upcoming' : 'Full'}
                  </Button>
                  <table>
                        <tbody>
                          <tr>
                            <th>Time</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Result</th>
                            </tr>
      {this.props.data.fixtures
            .filter(function (each,index) {
                  if (this.state.upcoming === true) {
                        return each.status !== 'FINISHED';
                  }
                  else {
                        return each;
                  }
            }, this)
            .map(function (each,index) { 
                  
                  const getResult = () => {
                        let color = '';

                        if (each.result.goalsHomeTeam !== each.result.goalsAwayTeam){
                              let result = '';

                              if (each.result.goalsHomeTeam > each.result.goalsAwayTeam){
                                  result = each.homeTeamName;
                              }
                              else if (each.result.goalsHomeTeam < each.result.goalsAwayTeam){
                                    result = each.awayTeamName;
                              }

                              color = result === this.props.name ? 'blue' : 'red';
                        }
  
                        else if (each.result.goalsHomeTeam !== null && each.result.goalsHomeTeam === each.result.goalsAwayTeam){
                                    color = 'gray';
                        }
                        
                        else {
                              color = 'black';
                        }

                        return color;                  
            }


            return (
                  <tr key = {index.toString()}>
                        <td>{moment(each.date).format("YYYY-MM-DD HH:mm")}</td>
                        <td>{each.homeTeamName}</td>
                        <td>{each.awayTeamName}</td>
                        <td style = {{'color': getResult()}}>{each.result.goalsHomeTeam !== null ? each.result.goalsHomeTeam + ':' + each.result.goalsAwayTeam : 'NA'}</td>
                  </tr>
                              ); 
                        },this)
            }
                  </tbody>
                  </table>
            </div>
      }
      </div>
)
}
}

export default Teams_Fixtures;