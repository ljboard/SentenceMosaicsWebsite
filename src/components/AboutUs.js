import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <h1>The Team</h1>
        <Row>
          <Col xs={12} md={6}>
            <h3>Program Development and Implementation</h3>
            <ul>
              <li>Alyse O. Baker, CCC-SLP, Wexford PA </li>
            </ul>
            <h3>App Design and Development</h3>
            <ul>
              <li>Ashley Lai</li>
              <li>Christie Chang</li>
              <li>Eddie Dryer</li>
              <li>Jackie Kang</li>
              <li>Jennifer Chou</li>
              <li>Lizzy Board</li>
              <li>Mehar Sawhney</li>
              <li>Sashank Gogula</li>
            </ul>
            <h3>Oversight</h3>
            <ul>
              <li>David Kosbie, Carnegie Mellon University</li>
            </ul>
            <h3>Initial Liason</h3>
            <ul>
              <li>Dr. Stephen Pellathy, Hampton Township School District, Allison Park, PA</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <img src={require('../media/team.png')} alt="Foam board" width={"100%"} height={"100%"} />
            <p>Left to right: David Kosbie, Lizzy Board, Alyse Baker, Jennifer Chou, Mehar Sawhney, Sashank Gogula</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
