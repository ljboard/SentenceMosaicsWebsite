import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

class AboutTheApp extends Component {
  render() {
    return (
      <div>
        <h1>The Project</h1>
        <h3>Overview</h3>
        <p>We are excited to share a new, free, speech-language therapy app developed through the mutual efforts of Carnegie Mellon University students on the Design for America Team and a Pittsburgh-based speech-language pathologist, Alyse O. Baker, CCC-SLP, and was launched in 2018. </p>
        <h3>Purpose</h3>
        <p>The purpose of this app is to assist students in their formulation of novel, complete, and meaningful spoken sentences produced in context with a photograph or illustration and with a language “coach” (speech-language therapist, teacher, parent, tutor, etc.) to assist in facilitating correct syntax. </p>
        <h3>Users</h3>
        <p>Students who can profit from the app include:</p>
        <ul>
          <li>Regular education students in Language Arts at the elementary level</li>
          <li>Tier II Reading or English students at the middle school level</li>
          <li>ELL (English Language Learners) students at any level</li>
          <li>Speech-language students with receptive and expressive language needs at any level</li>
          <li>Students whose hearing loss has impacted language skills</li>
          <li>Learning Support students who have written language goals</li>
        </ul>
        <p>In addition, the program can be of benefit to adults post-CVA (cerebrovascular accident/stroke) with aphasia and adults with dementia for whom familiar pictures can be a key to memory retention.</p>
      <h3>Background</h3>
      <p>For many years, language pathologists and teachers had to create their own tools for teaching sentence construction. For example, Alyse Baker created a foam board which allowed students to visualize how various parts of speech contribute to form sentences by physically interact with words: </p>
      <Row>
        <Col xs={12} md={6}>
          <img src={require('../media/foamboard.png')} alt="Foam board" width={"100%"} height={"100%"} />
        </Col>
        <Col xs={12} md={6}>
          <img src={require('../media/foamboard_example.jpg')} alt="Foam board" width={"100%"} height={"100%"} />
        </Col>
      </Row>
      <p>These types of tools are not the most efficient because of several reasons. First, the foam board is too bulky and not easily transportable, which makes it inconvenient for students and parents who want to utilize the tool outside of class time. Second, even though the velcro used to change the order of the parts of speech allows students to create a variety of different sentences, the vocabulary blocks themselves are not customizable enough and don’t have a wide range of options. Because of these limiting aspects of the foam board, it was decided that an app would greatly improve this system, and greatly benefit the students’ learning.</p>
      <h3>Research in Speech Pathology</h3>
      <p>This app builds upon the original work of Edith Fitzgerald who published Straight Language for the Deaf in 1926. The Fitzgerald Key uses unique colors to represent different parts of speech (noun as orange, pronoun as yellow, verb as green, etc.) as a tool for instruction. In this app, additional categories for prepositions, punctuation, and functional usage of words (“social” and “wh-words”) were added to diversify the vocabulary and allow students to construct more complex sentences.</p>
      </div>
    );
  }
}

export default AboutTheApp;
