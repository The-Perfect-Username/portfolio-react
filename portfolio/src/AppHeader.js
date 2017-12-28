import React, { Component } from 'react';
import './App.css';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <section id='header'>
                    <div id='titleContainer' class="noselect">
                        <h2 id='mainTitle'>Lachlan Enderlin</h2>
                        <h3 id='subtitle'>Full-Stack Web Developer</h3>
                    </div>
                </section>
            </div>
        );
    }
}

export default AppHeader;
