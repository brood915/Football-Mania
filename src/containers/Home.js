import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Home = () => (
	<div className='mainContent home'>
		<div className = 'backgroundImg'></div>
		<div>
			<h2>Tired of football websites with annoying ads?</h2>
			<h2>Tired of switching between multiple pages for what you want?</h2>
		</div>
		<div style = {{'backgroundColor': '#000000', 'color': '#FFFFFF'}}>
			<h1>You came to the right place!</h1>
			<h3>1. Find the data you want</h3>
			<h3>2. Save it</h3>
			<h3>3. See saved information all at once on the same page</h3>
		</div>
		<div>
		<h3>Want to help build this awesome app?</h3>
		<h4>Send me an email!</h4>
			<form className = 'email' action="https://formspree.io/brood915@gmail.com" method="POST">
		        <input type="text" placeholder="Your Full Name" name="name"/>
		        <input  type="email" placeholder="Your Email Address" name="email" required/>
		        <textarea placeholder="Your Message" name="message" rows="15" cols="40"></textarea>   
	        <Button type="submit">Send</Button>
        	</form>
		</div>
	</div>
)

export default Home;