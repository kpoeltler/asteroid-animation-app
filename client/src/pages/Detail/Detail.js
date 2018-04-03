import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    entry: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getEntry(this.props.match.params.id)
      .then(res => this.setState({ entry: res.data }))
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.entry.asteroid} 
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        
          
      </Container>
      </div>
    );
  }
}

export default Detail;
