import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header.js';
import AppHeader from './AppHeader.js';
import Overview from './Overview.js';
import Portfolio from './Portfolio.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <AppHeader />
                <Overview />
                <Portfolio />
            </div>
        );
    }
}

export default App;
