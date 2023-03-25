import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
        <div>
          <h2>Home Page</h2>
          <button>
            <Link to="/mots-croises">Jouer aux mots croisés</Link>
          </button>
        </div>
      );
  }
}

export default HomePage;