import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

function NavigationBar() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand as={Link} to="/Home">Flame.gg</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link as={Link} to="/Champions">Champions</Nav.Link>
						<Nav.Link as={Link} to="/Leaderboards">Leaderboards</Nav.Link>
						<Nav.Link as={Link} to="/Stats">Stats</Nav.Link>
					</Nav>
					<Nav>
						<SearchBar />
					</Nav>
					<Nav>
						<Nav.Link as={Link} to="/Deets">More deets</Nav.Link>
						<Nav.Link as={Link} to="/Memes">Memers here</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavigationBar;