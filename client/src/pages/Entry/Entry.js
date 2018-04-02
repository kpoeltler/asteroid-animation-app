import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Axios from "axios";

// import App from "./App"

class Entry extends Component {
  
    state = {
      entrys: [],
      comment: ""
    };

    componentDidMount() {
      this.loadentrys();
    }

    loadentrys = () => {
      API.getentrys()
        .then(res =>
          this.setState({ entrys: res.data, comment: "" })
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
    if ( this.state.comment) {
      console.log("hi2");
     API.saveentry({
          comment: this.state.comment
        })
        .then(res => this.loadentrys())
        .catch(err => console.log(err));
    }
  };
  // this.handleInputChange = this.handleInputChange.bind(this);
  // this.loadentrys = this.loadentrys.bind(this);
  // this.handleFormSubmit = this.handleFormSubmit.bind(this);


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <form>
                <TextArea
                  name="reflection"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="comment"
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

// componentDidMount() {
//   this.loadentrys();
// }

// loadentrys = () => {
//   axios.getentrys()
//     .then(res =>
//       this.setState({ entrys: res.data, asteroid: "", star: "", reflection: "" })
//     )
//     .catch(err => console.log(err));
// };

// deleteentry = id => {
//   API.deleteentry(id)
//     .then(res => this.loadentrys())
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//   const { name, value } = event.asteroid;
//   this.setState({
//     []:value
//   });
// };
