import React from "react";
import { MDBCol } from "mdbreact";
import "./SearchPage.css";
import { Button, FormControl, FormGroup, InputGroup, Container, Col } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleEnter = this.handleEnter.bind(this);
  }

  render () {
    return (
      <Container>
        <Col >
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Summoner"
              aria-label="Summoner Name"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button onClick={this.handleEnter.bind(this)} variant="primary" style={{fontWeight: "bold"}}>.flame</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Container>
    )      
  }

  handleEnter(e) {
    console.log(e)
  }
}

export default SearchBar;