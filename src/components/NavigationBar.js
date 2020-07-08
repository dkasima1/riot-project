import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Algorithms</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                    <NavDropdown title="Sorting" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/Sorting/Bubble_Sort">Bubble Sort</NavDropdown.Item>
                        <NavDropdown.Item  as={Link} to="/Sorting/Selection_Sort">Selection Sort</NavDropdown.Item>
                        <NavDropdown.Item  as={Link} to="/Sorting/Insertion_Sort">Insertion Sort</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  as={Link} to="/Sorting/Merge_Sort">Merge Sort</NavDropdown.Item>
                        <NavDropdown.Item  as={Link} to="/Quick_Sort">Quick Sort</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="MST" id="collasible-nav-dropdown">
                        <NavDropdown.Item  as={Link} to="/MST/Prims">Prim's Algorithm</NavDropdown.Item>
                        <NavDropdown.Item  as={Link} to="/MST/Kruskals">Kruskal's Algorithm</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shortest Path" id="collasible-nav-dropdown">
                        <NavDropdown.Item  as={Link} to="/Shortest_Path/Dijkstra's">Dijkstra's</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Flow" id="collasible-nav-dropdown">
                        <NavDropdown.Item  as={Link} to="/Flow/Ford_Fulkurson">Ford Fulkurson</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;