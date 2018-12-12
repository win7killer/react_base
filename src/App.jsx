import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './router';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div><Link to="/">index</Link></div>
                    <div><Link to="/about">about</Link></div>
                    <Routes></Routes>
                </div>
            </Router>
        );
    }
}

export default App;
