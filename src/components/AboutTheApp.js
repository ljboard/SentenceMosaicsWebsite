import React, { Component } from 'react';
import '../App.css';

class AboutTheApp extends Component {
  render() {
    return (
      <div>
        <h1>The Project</h1>
        <h3>Background</h3>
        <p>Carnegie-Mellon University is pleased to announce the publication of a free app developed over the course of more than two years through the mutual efforts of university students on the Design for America Team and a Pittsburgh-based speech-language pathologist, Alyse O. Baker, CCC-SLP. </p>
        <h3>Purpose and Students</h3>
        <p>The purpose of this app is to assist students in their formulation of novel, complete, and meaningful spoken sentences produced in context with a photograph or illustration and with a language “coach” (speech-language therapist, teacher, parent, tutor, etc.) to assist in facilitating correct syntax. Students who can profit from the app include:</p>
        <ul>
          <li>Regular education students in Language Arts at the elementary level</li>
          <li>Tier II Reading or English students at the middle school level</li>
          <li>ELL (English Language Learners) students at any level</li>
          <li>Speech-language students with receptive and expressive language needs at any level</li>
          <li>Students whose hearing loss has impacted language skills</li>
          <li>Learning Support students who have written language goals</li>
        </ul>
        <p>In addition, the program can be of benefit to adults post-CVA (cerebrovascular accident/stroke) with aphasia and adults with dementia for whom familiar pictures can be a key to memory retention.</p>
      </div>
    );
  }
}

export default AboutTheApp;
