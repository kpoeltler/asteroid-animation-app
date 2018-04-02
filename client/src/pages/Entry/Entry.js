import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Axios from "axios";
import Nav from "../../components/Nav";
import Panel from "../Panel";

// import App from "./App"

class Entry extends Component {
  
    state = {
      entries: [],
      comment: ""
    };

    componentDidMount() {
      this.loadEntries();
    }

    loadEntries = () => {
      API.getEntries()
        .then(res =>
          this.setState({ entries: res.data, comment: "" })
        )
        .catch(err => console.log(err));
    };
  

  handleInputChange = event => {
    console.log("update the state with new stuff", event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value
     });
  };


//   router.post('/new', function(req, res, next){
//     var todo = req.body;
//     if(!todo.title || !(todo.isDone + '')){
//         res.status(400);
//         res.json({
//             "error": "Bad Data"
//         });
//     } else {
//         db.todos.save(todo, function(err, todo){
//             if(err){
//                 res.send(err);
//             }
//             res.json(todo);
//         });
//     }
// });

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("hi");
    if (this.state.comment) {
      console.log("good comment");
      API.saveEntry ({
       comment: this.state.comment
      })
        .then(res => {
          console.log(res);
          this.loadEntries()
        })
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
          <Nav />
            <Jumbotron>
              <form>
                <TextArea
                  name="comment"
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

