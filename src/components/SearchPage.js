import React from "react";
import { MDBCol } from "mdbreact";
import "./SearchPage.css";
import { Button, FormControl, FormGroup, InputGroup, Container, Col } from 'react-bootstrap';

class SearchPage extends React.Component {
constructor(props) {
  super(props);
  
  this.handleEnter = this.handleEnter.bind(this);
}

  render () {
    return (
      <Container>
        <Col md={{span: 6, offset: 3}}>
          <InputGroup size="lg" className="mb-3">
            <FormControl
              placeholder="Search Summoner"
              aria-label="Summoner Name"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button onCLick={this.handleEnter.bind(this)} variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Container>
    )      
  }

  handleEnter(e) {
    alert("a key was pressed")
  }
}

export default SearchPage;