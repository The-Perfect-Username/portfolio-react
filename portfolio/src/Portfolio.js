import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id='portfolio'>
                    <div class="content-head">
                        <div class="title-tag">
                            <p>Portfolio</p>
                            <span class="tag-pointer"></span>
                        </div>
                    </div>
                    <br />
                    <div class="content">
                        <div class="flex">
                            <PortfolioItem url="http://www.unda.co" image_url="images/unda.png" title="Unda" description="Landing site for a SaaS video hosting website called Unda." />
                            <PortfolioItem url="http://www.kademorton.com" image_url="images/kademorton.png" title="Kade Morton" description="Portfolio site for Kade Morton, a public speaker, graphic novelist, and Internet Security Enthusiast." />
                        </div>
                        <a id='gitHubLink' href='https://github.com/The-Perfect-Username' target="_blank">
                            Check out my Github
                        </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
