import React from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import {
  Link
} from 'react-router-dom';

const Header = () => (
	<div>
	<Navbar inverse collapseOnSelect>
	    <Navbar.Header>
			<Navbar.Brand>
	        	<Link to="/">
	        		Football Mania		
	        		<FontAwesome className = 'football'
				        name='soccer-ball-o'
				        size='1x'
				        spin />
        		</Link>
	     	 </Navbar.Brand>
	     	 <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	    <Nav>
	      <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
	      <LinkContainer to="/leagues"><NavItem>Leagues</NavItem></LinkContainer>
	      <LinkContainer to="/tournaments"><NavItem>Tournaments</NavItem></LinkContainer>
	      <LinkContainer to="/players"><NavItem>Players</NavItem></LinkContainer>
	      <LinkContainer to="/saved"><NavItem>Saved</NavItem></LinkContainer>
	    </Nav>
	    </Navbar.Collapse>
 	</Navbar>
 	</div>
)


export default Header;
