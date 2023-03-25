import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Crossword from './Crossword';
import HomePage from './HomePage';


class AppClass extends React.Component {


  render() {
    return (
        <Router>
        <div>
            <Routes>
            <Route path="/crossword/" element={<Crossword/>}/>
            <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
        </Router>
    );
    }
}


export default AppClass;