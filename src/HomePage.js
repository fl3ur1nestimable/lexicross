import React, { useState } from 'react';
import themes from './themes/themes.json';
import './HomePage.css'

function HomePage() {
  //const themes = ['art', 'celebration', 'cinema', 'city', 'family', 'fauna', 'finance', 'food', 'health', 'history', 'house', 'job', 'music', 'schooledu', 'science', 'socialmedia', 'sports', 'transports', 'travel'];
  const [selectedTheme, setSelectedTheme] = useState(null);
  const th = Object.keys(themes);

  function selectTheme(theme) {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  }

  function getSelectedValue() {
    const number = document.getElementById("numberOfWords").value;
    const length = document.getElementById("maxLength").value;
    localStorage.setItem('selectedNumber', number);
    localStorage.setItem('selectedLength', length);
  }

  return (
    <div className='home'>
      <h1 className='title'>LexiCross</h1>
      <h2 className='subtitle'>Select a theme :</h2>
      <div className='themes'>
          {th.map((theme) => (
            <button className='themebtn' key={theme} onClick={() => selectTheme(theme)}>{theme} {selectedTheme === theme ? '✅' : ''}</button> 
          ))}
      </div>
      <h3 className='subtitle'>Select the maximum number of words :</h3>
        <select id="numberOfWords">
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
        </select>

        <h3 className='subtitle'>Select the maximum length of words :</h3>
        <select id="maxLength">
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        
      {selectedTheme && (
        <div className='validate'>
          <button onClick={() => {getSelectedValue();window.location.replace('/crossword');}}>Start to play</button>
          <button onClick={() => window.location.replace('/learning')}>Learn</button>
        </div>)}
    </div>
  );
}

export default HomePage;
