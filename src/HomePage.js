import React, { useState } from 'react';

function HomePage() {
  const themes = ['art', 'celebration', 'cinema', 'city', 'family', 'fauna', 'finance', 'food', 'health', 'history', 'house', 'job', 'music', 'schooledu', 'science', 'socialmedia', 'sports', 'transports', 'travel'];
  const [selectedTheme, setSelectedTheme] = useState(null);

  function selectTheme(theme) {
    setSelectedTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  }

  return (
    <div>
      <h1>Crosswords</h1>
      <h2>Select a theme :</h2>
      <ul>
        {themes.map((theme) => (
          <li key={theme}>
            <button onClick={() => selectTheme(theme)}>
              {theme} {selectedTheme === theme ? '✅' : ''}
            </button>
          </li>
        ))}
      </ul>
      {selectedTheme && (
        <button onClick={() => window.location.replace('/crossword')}>
            Start to play
        </button>
      )}
    </div>
  );
}

export default HomePage;
