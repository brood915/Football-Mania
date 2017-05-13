import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Home = () => (
	<div className='mainContent home'>
		<div className = 'backgroundImg'></div>
		<div>
			<h2><span className='crossline'>Tired of football websites with annoying ads?</span>
				<FontAwesome
				className = 'times'
				name='times' size='2x'/>
			</h2>
			<h2><span className='crossline'>Tired of switching between multiple pages for what you want?</span>
				<FontAwesome
				className = 'times'
				name='times' size ='2x'/>
			</h2>
		</div>
		<div style = {{'backgroundColor': '#000000', 'color': '#FFFFFF'}}>
			<h1>You came to the right place!</h1>
			<h3> 
				<FontAwesome
				className = 'check'
				name='check-circle-o' 
				size='2x'/>
				Find the data you want
			</h3>
			<h3>
				<FontAwesome
				className = 'check'
				name='check-circle-o'
				size='2x'/>			
				Save it
			</h3>
			<h3>
				<FontAwesome
				className = 'check'
				name='check-circle-o' 
				size='2x'/>			
				See saved information all at once on the same page
			</h3>
		</div>
		<div>
		<h1>Get in Touch</h1>
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