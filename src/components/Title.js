import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import demo from '../media/demovideo.mp4';
import '../App.css';

class Title extends Component {
  render() {
    return (
      <Grid>
        <Row className="TitleRow">
          <Col className="TitleText" xs={12} md={6} mdPush={6}>
            <Col smHidden xsHidden style={{height: 150}}></Col>
            <h1> Sentence Mosaics </h1>
            <h4> A free speech therapy app to teach and reinforce formulation of complete and meaningful spoken sentences </h4>
            <div className="GetStarted">
              <a href="https://itunes.apple.com/us/app/sentence-mosaics/id1288635184?mt=8" target="_blank">
                GET STARTED
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} mdPull={6}>
            <Col smHidden xsHidden style={{height: 100}}></Col>
            <div className="iPad">
              <iframe width="313" height="410" src="https://www.youtube.com/embed/kWJ50pL9oik?rel=0&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&modestbranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Title;
