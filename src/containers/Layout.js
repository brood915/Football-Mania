import React from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer }from 'react-router-bootstrap';

import {
  Link
} from 'react-router-dom';

const Layout = () => (
	<Navbar inverse collapseOnSelect>
	    <Navbar.Header>
			<Navbar.Brand>
	        	<Link to="/">Football Mania</Link>
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
)


export default Layout;
