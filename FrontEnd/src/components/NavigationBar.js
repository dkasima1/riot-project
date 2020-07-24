import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom'


class NavigationBar extends React.Component {
	constructor() {
		super()
		this.state = {
			summoner: "",
			toSearch: false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleOnClick = this.handleOnClick.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		if (this.state.toSearch === true) {
			return <Redirect to={"/Summoner?name=" + this.state.summoner} />
		}
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
							<Form inline onSubmit={this.handleSubmit}>
								<FormControl name="summoner" value={this.state.summoner} 
									onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
								<Button	type="submit" variant="outline-info">Search</Button>
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
	handleOnClick() {
		alert("searched " + this.state.summoner);
	}

	handleChange(event) {
		this.setState({summoner: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.history.push("/Summoner/" + this.state.summoner)	
	}
}
export default withRouter(NavigationBar);