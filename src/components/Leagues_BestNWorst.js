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
        
        return (
            <div>{bestOffense}</div>
        )


}


export default Leagues_BestNWorst;

