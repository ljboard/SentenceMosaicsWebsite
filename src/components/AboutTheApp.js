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
      <p>For many years, language pathologists and teachers had to create their own tools for teaching sentence construction. For example, Alyse Baker created a foam board which allowed students to interact with words: </p>
      <Row>
        <Col xs={12} md={6}>
          <img src={require('../media/foamboard.png')} alt="Foam board" width={"100%"} height={"100%"} />
        </Col>
        <Col xs={12} md={6}>
          <img src={require('../media/foamboard_example.jpg')} alt="Foam board" width={"100%"} height={"100%"} />
        </Col>
      </Row>
      <p>However, these types of tools are not easily transportable for students, teachers, or parents, who may want to practice with their children outside of classtime.</p>
      <h3>Research in Speech Pathology</h3>
      <p>This app builds upon the original work of Edith Fitzgerald who published Straight Language for the Deaf
      in 1926. The Fitzgerald Key uses color to represent parts of speech (noun, pronoun,
      adjective, adverb, verb, etc.) as a tool for instruction. In this app, additional categories for prepositions, punctuation, and functional usage of
      words (“social” and “wh-words”) were added.</p>
      </div>
    );
  }
}

export default AboutTheApp;
