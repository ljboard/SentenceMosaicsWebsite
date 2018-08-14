import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import demo from '../media/SentenceMosaicsDemo.mp4';
import '../App.css';

class Title extends Component {
  render() {
    return (
      <Grid>
        <Row className="TitleRow">
          <Col className="TitleText" xs={12} md={6} mdPush={6}>
            <Col smHidden xsHidden style={{height: 150}}></Col>
            <h1> Sentence Mosaics </h1>
            <p> A new way to visualize language-learning </p>
            <div className="GetStarted">
              <a href="https://itunes.apple.com/us/app/sentence-mosaics/id1288635184?mt=8" target="_blank">
                GET STARTED
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} mdPull={6}>
            <Col smHidden xsHidden style={{height: 100}}></Col>
            <div className="iPad">
              <video src={demo} controls={false} loop={true} muted autoPlay={true} width={318} height={418}></video>
              {/* <img src={dog} alt="Demo Image" width={318} height={418} /> */}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Title;
