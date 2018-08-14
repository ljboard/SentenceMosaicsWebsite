import React, { Component } from 'react';
import '../App.css';

class Tutorial extends Component {
  render() {
    return (
      <div>
        <h1>How the App Works</h1>
        <h3>Managing Images</h3>
        <p>Students can upload their own images to practice building sentences. This allows them to practice describing scenes from their own perspective or practice describing them from the perspective of others in the scene.</p>
        <ul>
          <li>Deleting an photo: Double Tap</li>
          <li>Add new photo: Press "Import Photos"</li>
          <li>Remove all photos: Press the menu on the top right</li>
        </ul>
        <h3>Building Sentences</h3>
        <p>After selecting an image, a student can either view previously created images or build a new sentence.</p>
        <ul>
          <li>Adding a word: Press the correct part of speech</li>
          <li>Adding a custom word: Select a part of speech, then press the "plus" button to input a new word</li>
          <li>Remove a word: Double tap</li>
          <li>Reorder words: Hold down the word and move it to a new position in the sentence</li>
          <li>Save sentence: Press "Submit" then "Save Sentence Text" if desired</li>
          <li>Record sentence: Press "Submit" then "Tap to record" to create an audio recording </li>
        </ul>
      </div>
    );
  }
}

export default Tutorial;
