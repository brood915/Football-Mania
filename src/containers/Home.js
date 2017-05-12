import React from 'react';
import PropTypes from 'prop-types';


const Home = () => (
	<div className='mainContent'>
		<div className = 'backgroundImg'></div>
		<div className = 'full' style = {{'backgroundColor': '#FFFFFF', 'color': '#000000'}}>
			<h2>Tired of football websites with annoying ads?</h2>
			<h2>Tired of switching between multiple pages for what you want?</h2>
		</div>
		<div className = 'full' style = {{'backgroundColor': '#E53A40', 'color': '#FFFFFF'}}>
			<h1>You came to the right place!</h1>
			<h3>1. Find the data you want</h3>
			<h3>2. Save it</h3>
			<h3>3. See saved information all at once on the same page</h3>
		</div>
	</div>
)

export default Home;