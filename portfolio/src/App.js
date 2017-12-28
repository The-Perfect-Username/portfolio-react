import React, { Component } from 'react';
import Header from './Header.js';
import AppHeader from './AppHeader.js';
import Overview from './Overview.js';
import Portfolio from './Portfolio.js';
import Skills from './Skills.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <AppHeader />
                <Overview />
                <Portfolio />
                <Skills />
                <Footer />
            </div>
        );
    }
}

export default App;
