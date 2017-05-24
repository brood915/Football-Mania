import React from 'react';
import PropTypes from 'prop-types';

class Teams_Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            win:0,
            loss:0,
            draw:0     
        }
    } 

    componentWillMount () {
        let win = 0;
        let loss = 0;
        let draw = 0;

        Promise.all(this.props.fixtures
        .map(function (each,index) { 
                    if (each.result.goalsHomeTeam !== each.result.goalsAwayTeam){
                        let result = '';
                        if (each.result.goalsHomeTeam > each.result.goalsAwayTeam){
                            result = each.homeTeamName;
                         }
                        else if (each.result.goalsHomeTeam < each.result.goalsAwayTeam){
                             result = each.awayTeamName;
                        }

                        result === this.props.name ? win++ : loss++;
                    }
  
                    else if (each.result.goalsHomeTeam !== null && each.result.goalsHomeTeam === each.result.goalsAwayTeam){
                        draw++;
                        }               
        },this)).then(()=>this.setState({win,loss,draw}));
    }

    render() {

        const matches = this.props.fixtures.filter((each) => each.status === 'FINISHED');
        const total = matches.length; 
        return (
            <div>
                <span className='title'>W:</span> {this.state.win}
                <span className='title'> L:</span> {this.state.loss}
                <span className='title'> D:</span> {this.state.draw}
                <span className='title'> Total:</span> {total}
                <span className='title'> Win Ratio:</span> {Math.round(this.state.win/total * 100 * 100)/100 + '%'}
            </div>
        );
    }
}


Teams_Results.propTypes = {
    fixtures: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

export default Teams_Results;