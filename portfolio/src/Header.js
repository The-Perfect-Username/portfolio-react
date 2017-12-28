import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="noselect">
                    <a id='goToTop' href="#top">
                        <i class="fa fa-chevron-up" aria-hidden='true'></i>
                    </a>
                    <nav>
                        <a href='#overview'>Overview</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#skills'>Skills</a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
