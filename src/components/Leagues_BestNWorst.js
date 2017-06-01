import React from 'react';
import PropTypes from 'prop-types';

const Leagues_BestNWorst = (props) => {

	function sortData (dataType) {
		return function (a,b) {
			if (a[dataType] < b[dataType])
				return -1;
			if (a[dataType] > b[dataType])
				return 1;
			return 0;
			}
	}

		const offense = [...props.data].sort(sortData('goals'));
		const bestOffense = offense[offense.length-1].teamName;
		const worstOffense = offense[0].teamName;

		const defense = [...props.data].sort(sortData('goalsAgainst'));
		const worstDefense = defense[defense.length-1].teamName;
		const bestDefense = defense[0].teamName;
        
		const wins = [...props.data].sort(sortData('wins')); 
		const mostWins = wins[wins.length-1].teamName;

		const draws = [...props.data].sort(sortData('draws')); 
		const mostDraws = draws[draws.length-1].teamName;

		const losses = [...props.data].sort(sortData('losses')); 
		const mostLosses = losses[losses.length-1].teamName;

        return (
			<div>
				<div>
					<span className="block"><span className='title'>Best Offense:</span> {bestOffense}</span>
					<span className="block"><span className='title'>Worst Offense:</span> {worstOffense}</span>
				</div>
				<div>
					<span className="block"><span className='title'>Best Defense:</span> {bestDefense}</span>
					<span className="block"><span className='title'>Worst Defense:</span> {worstDefense}</span>
				</div>	
				<div>
					<span className="block"><span className='title'>Most Wins:</span> {mostWins}</span>
					<span className="block"><span className='title'>Most Draws:</span> {mostDraws}</span>
					<span className="block"><span className='title'>Most Losses:</span> {mostLosses}</span>
				</div>				
			</div>		
        )
}

Leagues_BestNWorst.propTypes = {
  data: PropTypes.array.isRequired
}

export default Leagues_BestNWorst;

