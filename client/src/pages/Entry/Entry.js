import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";


class Entries extends Component {
  state = {
    entries: [],
    comment: "",
    bc: false,
    celestron: false,
    meade: false,
    coronado: false,
    asteroid: false,
    globular: false,
    galaxy: false,
    star: false,
    solarSystem: false,
    interest: "",
    telescope: "",
    filter: "",
    orbit: "",
    neighborhood: ""
    
  };

  componentDidMount() {
    this.loadEntries();
  }

  loadEntries = () => {
    API.getEntries()
      .then(res =>
        this.setState({
          entries: res.data,
          comment: '',
          filter: "",
          telescope: "",
          interest: "",
          star: "",
          galaxy: "",
          globular: "",
          asteroid: "",
          orbit: "",
          neighborhood: ""
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
      case "asteroid":
        this.setState(
          { asteroid: true, interest: event.target.value },
          function() {}
        );
        break;
      case "solarSystem":
        this.setState(
          { solarSystem: true, interest: event.target.value },
          function() {}
        );
        break;

      case "star":
        this.setState(
          { star: true, interest: event.target.value },
          function() {}
        );
        break;

      case "galaxy":
        this.setState(
          { galaxy: true, interest: event.target.value },
          function() {}
        );
        break;

      case "globular":
        this.setState(
          { globular: true, interest: event.target.value },
          function() {}
        );
        break;
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      entries: [],
      filter: "",
      telescope: "",
      interest: "",
      star: "",
      galaxy: "",
      globular: "",
      asteroid: "",
      orbit: "",
      comment: "",
      neighborhood: ""

    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.comment){
    API.saveEntry({
      telescope: this.state.telescope,
      interest: this.state.interest,
      orbit: this.state.orbit,
      filter: this.state.filter,
      comment: this.state.comment,
      neighborhood: this.state.neighborhood,
    
    })
      .then(res => this.loadEntries())
      .catch(err => console.log(err));
  }
};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size=" md-6">
            <Nav />
            <Jumbotron>
              <h3 style={{ color:"white", fontFamily: "futuroNormal", letterSpacing: "7px"
               }} >Sleep, Eat, Code, Astronomy </h3>
             
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
                  <span> Interest </span>
                  <select
                    value={this.state.interest}
                    onChange={this.handleTelescopeChange}
                    name="interest"
                    placeholder="Choose Interest"
                  >
                    <option value="" />
                    <option
                      value="asteroid"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.coronado
                      }
                    >
                      Asteroid
                    </option>

                    <option value="solarSystem" hidden={this.state.coronado}>
                      Solar System
                    </option>

                    <option
                      value="globular"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.coronado
                      }
                    >
                      Globular Cluster
                    </option>

                    <option
                      value="star"
                      hidden={this.state.coronado || this.state.meade}
                    >
                      Star
                    </option>

                    <option
                      value="galaxy"
                      hidden={
                        this.state.celestron ||
                        this.state.coronado ||
                        this.state.meade
                      }
                    >
                      Galaxy
                    </option>

                    <option
                      value="sun"
                      hidden={
                        this.state.celestron ||
                        this.state.meade ||
                        this.state.bc
                      }
                    >
                      Sun
                    </option>
                  </select>
                </div>
                <br />

                <div>
                  <br />
                  <span> Neighborhood </span>
                  <select
                    value={this.state.neighborhood}
                    onChange={this.handleInputChange}
                    name="neighborhood"
                    placeholder="Neighborhood"
                  >
                    <option value="" />
                    <option
                      value="saturn"
                      hidden={
                        this.state.globular ||
                        this.state.asteroid ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Saturn
                    </option>

                    <option
                      value="jupiter"
                      hidden={
                        this.state.globular ||
                        this.state.asteroid ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Jupiter
                    </option>
                    <option
                      value="moon"
                      hidden={
                        this.state.globular ||
                        this.state.star ||
                        this.state.asteroid ||
                        this.state.galaxy
                      }
                    >
                      Moon
                    </option>


                    <option
                      value="mars"
                      hidden={
                        this.state.globular ||
                        this.state.asteroid ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Mars
                    </option>
                  </select>
                </div>
                <br />


                <div>
                  <br />
                  <span>Orbit</span>
                  <select
                    value={this.state.orbit}
                    onChange={this.handleInputChange}
                    name="orbit"
                    placeholder="orbit"
                  >
                    <option value="" />
                    <option
                      value="Inner or Outer Main-belt"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Inner or Outer Main-belt
                    </option>
                    <option
                      value="Aten"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Aten
                    </option>
                    <option
                      value="Parabolic"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      TransNeptunian
                    </option>
                    <option
                      value="Jupiter Trojan"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Jupiter Trojan
                    </option>
                    <option
                      value="Amor"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Amor
                    </option>
                    <option
                      value="Apollo"
                      hidden={
                        this.state.globular ||
                        this.state.planet ||
                        this.state.star ||
                        this.state.galaxy
                      }
                    >
                      Apollo
                    </option>
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
                      Solar 90mm
                    </option>
                  </select>
                </div>
                <br />

                <TextArea
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  name="comment"
                  placeholder="Observation"
                />

                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Submit Observation
                </FormBtn>

              </form>
              </Jumbotron>
          </Col>
          </Row>
      </Container>

)

  }
      }

export default Entries;
