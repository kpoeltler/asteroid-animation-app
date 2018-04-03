import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Axios from "axios";
import Nav from "../../components/Nav";


// import App from "./App"

class Entry extends Component {
  
    state = {
      entries: [],
      asteroid: "",
      orbit: "",
      comment: ""
    };

    componentDidMount() {
      this.loadEntries();
    }

    loadEntries = () => {
      API.getEntries()
        .then(res =>
          this.setState({ entries: res.data, asteroid: "", orbit: "", comment: "" })
        )
        .catch(err => console.log(err));
    };
  

  handleInputChange = event => {
    console.log("update the state with new stuff", event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value
     });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("hi");
    if (this.state.comment) {
      console.log("good comment");
      API.saveEntry ({
        asteroid: this.state.asteroid,
        orbit: this.state.orbit,
        comment: this.state.comment
      })
        .then(res => {
          console.log(res);
          this.loadEntries()
        })
        .catch(err => console.log(err));
    }
  };
  // .then(res => this.loadObservations())
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
          <Nav />
            <Jumbotron>
              <form>
              <Input
                  name="asteroid"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Asteroid's name"
                />
              
                <Input
                  name="orbit"
                  onChange={this.handleInputChange.bind()}
                  placeholder="Which orbit? Atira, Inner or Outer Main-belt, TransNeptunian, Aten, Parabolic, Hyperbolic, Amor, Jupiter Trojan, Mars-crossing, or Centaur"
                />

                <TextArea
                  name="comment"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Comment"
                />
                <FormBtn
                  /* disabled={!(this.state.orbit && this.state.asteroid)} */
                  onClick={this.handleFormSubmit}
                >
                  Submit Entry
                </FormBtn>
              </form>
            
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Entry;

