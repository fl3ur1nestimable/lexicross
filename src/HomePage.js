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

  return (
    <div className='home'>
      <h1 className='title'>LexiCross</h1>
      <h2 className='subtitle'>Select a theme :</h2>
      <div className='themes'>
          {th.map((theme) => (
            <button className='themebtn' key={theme} onClick={() => selectTheme(theme)}>{theme} {selectedTheme === theme ? '✅' : ''}</button> 
          ))}
      </div>
      {selectedTheme && (
        <div className='validate'>
          <button onClick={() => window.location.replace('/crossword')}>Start to play</button>
          <button onClick={() => window.location.replace('/learning')}>Learn</button>
        </div>)}
    </div>
  );
}

export default HomePage;
