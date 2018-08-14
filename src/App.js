import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Title from './components/Title.js';
import Tutorial from './components/Tutorial.js';
import AboutTheApp from './components/AboutTheApp.js';
import AboutUs from './components/AboutUs.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: "About the App",
      selected: {
        "Tutorial": false,
        "About the App": true,
        "About Us": false
      }
    };
    this.updateShowing = this.updateShowing.bind(this);
  }

  updateShowing(newValue) {
    let newState = Object.assign({}, this.state);
    newState.showing = newValue;
    newState.selected = {
      "Tutorial": false,
      "About the App": false,
      "About Us": false
    };
    newState.selected[newValue] = true;
    this.setState(newState);
  }

  getSectionClassName(section) {
    if (this.state.selected[section]) {
      return "SectionName selected";
    }
    return "SectionName";
  }

  render() {
    var toShow;
    switch (this.state.showing) {
      case "Tutorial":
        toShow = <Tutorial />;
        break;
      case "About the App":
        toShow = <AboutTheApp />;
        break;
      default:
        toShow = <AboutUs />;
        break;        
    }
    return (
      <div className="App">
        <div>
          <Title />
          <Grid>
            <Row>
              <Col xs={12} md={4} className={this.getSectionClassName("Tutorial")}>
                <h2 onClick={ () => this.updateShowing("Tutorial") }>Tutorial</h2>
              </Col>
              <Col xs={12} md={4} className={this.getSectionClassName("About the App")}>
                <h2 onClick={ () => this.updateShowing("About the App") }>About the App</h2>
              </Col>
              <Col xs={12} md={4} className={this.getSectionClassName("About Us")}>
                <h2 onClick={ () => this.updateShowing("About Us") }>About Us</h2>
              </Col>
            </Row>
          <Row>
            { toShow }
            <div style={{height: 50}}></div>
          </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
