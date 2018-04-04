import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";


class Entry extends Component {
  
    state = {
      bc: false,
      celestron: false,
      meade: false,
      entries: [],
      telescope: "",
      filter: "",
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
          this.setState({ entries: res.data, filter: "", telescope: "", asteroid: "", orbit: "", comment: "" })
        )
        .catch(err => console.log(err));
    };
  
    handleTelescopeChange = event => {
      console.log("update the state with new telescope", event.target.value);
      switch(event.target.value){
        case "celestron":
        this.setState({celestron:true, telescope:event.target.value}, function(){
          console.log("celestron update",this.state.celestron);
        }) 
        break;
        case "meade":
        this.setState({meade:true, telescope:event.target.value}, function(){
          console.log("meade update",this.state.meade);
        }) 
        break;
      }
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
    // if (this.state.comment) {
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
    // }
  };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
          <Nav />
            <Jumbotron>
              <form>
              {/* <Input
                  value={this.state.user}
                  onChange={this.handleInputChange}
                  name="user"
                  placeholder="email address (required)"
                 />

              <Input
              value={this.state.asteroid}
                  name="asteroid"
                  onChange={this.handleInputChange}
                  placeholder="Asteroid's name"
                /> */}

                <div>
                  <br/>
                                <span> Telescope </span>
                            <select
                                value={this.state.telescope}
                                onChange={this.handleTelescopeChange}
                                name="telescope"
                                placeholder="telescope"
                            >
                                <option value=""></option>
                                <option value='bc' >24" Boller & Chivens</option>
                                <option value='celestron'>14" Celestron</option>
                                <option value='meade'>16" Meade</option>    
                  </select>
                  </div>
                  <br/>

                <div>
                  <br/>
                                <span> Target </span>
                            <select
                                value={this.state.target}
                                onChange={this.handleInputChange}
                                name="target"
                                placeholder="Choose target"

                            >
                            
                                <option value=""></option>
                                <option value="Asteroid" hidden = {this.state.celestron}>Asteroid</option>
                                <option value="Variable Star">Variable Star</option>
                                <option value="Globular Cluster" hidden = {this.state.celestron} >Globular Cluster</option>
                                <option value="Binary Stars">Binary Stars</option>
                                <option value="Planet">Planet</option>
                                <option value="Moon">Moon</option>
                                <option value="Galaxy">Galaxy</option>
                                <option value="Sun" hidden={this.state.celestron}> Sun</option>
                  </select>
                  </div>
                  <br/>
                <div>
                  <br/>
                                <span> Orbit </span>
                            <select
                                value={this.state.orbit}
                                onChange={this.handleInputChange}
                                name="orbit"
                                placeholder="orbit"
                            >
                                <option value=""></option>
                                <option value="Atira">Atira</option>
                                <option value="Inner or Outer Main-belt">Inner or Outer Main-belt</option>
                                <option value="Aten">Aten</option>
                                <option value="Parabolic">TransNeptunian</option>
                                <option value=" Jupiter Trojan"> Jupiter Trojan</option>
                                <option value="Amor">Amor</option>
                                <option value="Apollo">Apollo</option>
                  </select>
                  </div>
                  <br/>
                  
                    <div>
                  <br/>
                                <span> Spectrograph filter </span>
                            <select
                                value={this.state.filter}
                                onChange={this.handleInputChange}
                                name="filter"
                                placeholder="spectrograph filter"
                            >
                                <option value=""></option>
                                <option value='BG38	2 mm' >BG38	2 mm</option>
                                <option value='WG360	1 mm'>WG360	1 mm</option>
                                   
                  </select>
                  </div>
                  <br/>








                <TextArea
                value={this.state.comment}
                  name="comment"
                  onChange={this.handleInputChange}
                  placeholder="Comment"
                />
                <FormBtn
                  /* hidden={!(this.state.orbit && this.state.asteroid)} */
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

