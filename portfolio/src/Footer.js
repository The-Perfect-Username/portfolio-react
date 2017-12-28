import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <nav>
                        <a href='https://www.linkedin.com/in/lachlan-enderlin/'>
                            <i class='fa fa-linkedin-square' aria-hidden='true'></i>
                        </a>
                        <a href='https://github.com/The-Perfect-Username'>
                            <i class='fa fa-github-square' aria-hidden='true'></i>
                        </a>
                    </nav>
                </footer>
            </div>
        );
    }
}

export default Footer;
