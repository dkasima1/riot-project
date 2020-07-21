import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { Link} from 'react-router-dom'

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
					<Navbar bg="dark" variant="dark">
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button onClick={handleOnClick} variant="outline-info">Search</Button>
						</Form>
					</Navbar>
					<Nav>
						<Nav.Link as={Link} to="/Deets">More deets</Nav.Link>
						<Nav.Link as={Link} to="/Memes">Memers here</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

function handleOnClick() {
	alert("searched");
}

export default NavigationBar;