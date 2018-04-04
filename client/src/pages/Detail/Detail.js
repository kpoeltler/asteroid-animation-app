import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    entry: {},
    orbit: "Apollo"
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getEntry(this.state.orbit)
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

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Comment</h1>
              <p>
                {this.state.entry.comment}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Homepage</Link>
          </Col>
        </Row>

      </Container>
      </div>
    );
  }
}

export default Detail;
