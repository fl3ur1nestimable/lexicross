import React, { useState } from 'react';
import themes from './themes/themes.json';

function HomePage() {
  //const themes = ['art', 'celebration', 'cinema', 'city', 'family', 'fauna', 'finance', 'food', 'health', 'history', 'house', 'job', 'music', 'schooledu', 'science', 'socialmedia', 'sports', 'transports', 'travel'];
  const [selectedTheme, setSelectedTheme] = useState(null);
  const th = Object.keys(themes);

  function selectTheme(theme) {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  }

  return (
    <div>
      <h1>Crosswords</h1>
      <h2>Select a theme :</h2>
      <ul>
        {th.map((theme) => (
          <li key={theme}>
            <button onClick={() => selectTheme(theme)}>
              {theme} {selectedTheme === theme ? '✅' : ''}
            </button>
          </li>
        ))}
      </ul>
      {selectedTheme && (
        <><button onClick={() => window.location.replace('/crossword')}>
          Start to play
        </button><button onClick={() => window.location.replace('/learning')}>
            Learn
          </button></>
            )
          
        }
      
    </div>
  );
}

export default HomePage;
