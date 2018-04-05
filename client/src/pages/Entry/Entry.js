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
    coronado: false,
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
        this.setState({
          entries: res.data,
          filter: "",
          telescope: "",
          asteroid: "",
          orbit: "",
          comment: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleTelescopeChange = event => {
    switch (event.target.value) {
      case "celestron":
        this.setState(
          { celestron: true, telescope: event.target.value },
          function() {}
        );
        break;

      case "meade":
        this.setState(
          { meade: true, telescope: event.target.value },
          function() {}
        );
        break;

      case "bc":
        this.setState(
          { bc: true, telescope: event.target.value },
          function() {}
        );
        break;

      case "coronado":
        this.setState(
          { coronado: true, telescope: event.target.value },
          function() {}
        );
        break;
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveEntry({
      telescope: this.state.telescope,
      target: this.state.target,
      orbit: this.state.orbit,
      filter: this.state.filter,
      comment: this.state.comment
    })
      .then(res => {
        this.loadEntries();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-08">
            <Nav />
            <Jumbotron>
              <form>
                <div>
                  <br />
                  <span> Telescope </span>
                  <select
                    value={this.state.telescope}
                    onChange={this.handleTelescopeChange}
                    name="telescope"
                    placeholder="telescope"
                  >
                    <option value="" />
                    <option value="bc">24" Boller & Chivens</option>
                    <option value="celestron">14" Celestron</option>
                    <option value="meade">16" Meade</option>
                    <option value="coronado">Coronado P.S.T.</option>
                  </select>
                </div>
                <br />

                <div>
                  <br />
                  <span> Target </span>
                  <select
                    value={this.state.target}
                    onChange={this.handleInputChange}
                    name="target"
                    placeholder="Choose target"
                  >
                    <option value="" />
                    <option
                      value="Asteroid"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.coronado
                      }
                    >
                      Asteroid
                    </option>
                    <option value="Variable Star" hidden={this.state.coronado}>
                      Variable Star
                    </option>
                    <option
                      value="Globular Cluster"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.coronado
                      }
                    >
                      Globular Cluster
                    </option>
                    <option value="Binary Stars" hidden={this.state.coronado}>
                      Binary Stars
                    </option>
                    <option value="Planet" hidden={this.state.coronado}>
                      Planet
                    </option>
                    <option value="Moon" hidden={this.state.coronado}>
                      Moon
                    </option>
                    <option
                      value="Galaxy"
                      hidden={
                        this.state.meade || this.state.bc || this.state.coronado
                      }
                    >
                      Galaxy
                    </option>

                    <option
                      value="Sun"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.bc
                      }
                    >
                      {" "}
                      Sun
                    </option>
                  </select>
                </div>
                <br />
                <div>
                  <br />
                  <span> Orbit </span>
                  <select
                    value={this.state.orbit}
                    onChange={this.handleInputChange}
                    name="orbit"
                    placeholder="orbit"
                  >
                    <option value="" />
                    <option value="Inner or Outer Main-belt">
                      Inner or Outer Main-belt
                    </option>
                    <option value="Aten">Aten</option>
                    <option value="Parabolic">TransNeptunian</option>
                    <option value="Jupiter Trojan"> Jupiter Trojan</option>
                    <option value="Amor">Amor</option>
                    <option value="Apollo">Apollo</option>
                  </select>
                </div>
                <br />

                <div>
                  <br />
                  <span> Spectrograph filter </span>
                  <select
                    value={this.state.filter}
                    onChange={this.handleInputChange}
                    name="filter"
                    placeholder="spectrograph filter"
                  >
                    <option value="" />
                    <option value="BG38	2 mm" hidden={this.state.coronado}>
                      BG38 2 mm
                    </option>
                    <option value="WG360	1 mm" hidden={this.state.coronado}>
                      WG360 1 mm
                    </option>
                    <option value="Moon	1.25&quot;" hidden={this.state.coronado}>
                      Moon 1.25"
                    </option>
                    <option value="82A Light Blue" hidden={this.state.coronado}>
                      82A Light Blue
                    </option>
                    <option
                      value="Hydrogen Alpha"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.bc
                      }
                    >
                      Hydrogen-alpha
                    </option>
                    <option
                      value="Solar 90mm"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.bc
                      }
                    >
                      {" "}
                      Solar 90mm
                    </option>
                  </select>
                </div>
                <br />
              
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
