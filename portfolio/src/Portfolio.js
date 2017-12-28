import React, { Component } from 'react';
import SectionTag from './SectionTag';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section id='portfolio'>
                    <SectionTag title="Portfolio" />
                    <br />
                    <div class="content">
                        <div class="flex">
                            <PortfolioItem url="http://www.unda.co" image_url="images/unda.png" title="Unda" description="Landing site for a SaaS video hosting website called Unda." />
                            <PortfolioItem url="http://www.kademorton.com" image_url="images/kademorton.png" title="Kade Morton" description="Portfolio site for Kade Morton, a public speaker, graphic novelist, and Internet Security Enthusiast." />
                        </div>
                        <GithubLink />
                    </div>
                </section>
            </div>
        );
    }
}

class PortfolioItem extends Component {
    render() {
        return (
            <div>
                <a class='portfolio-link' href={this.props.url} target='_blank'>
                    <div class="portfolio-item">
                        <div class="portfolio-image">
                            <img src={this.props.image_url} alt={this.props.title} height="100%" width="auto" />
                        </div>
                        <div class="portfolio-info">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

class GithubLink extends Component {
    render() {
        return (
            <div>
                <a id='gitHubLink' href='https://github.com/The-Perfect-Username' target="_blank" rel="noopener noreferrer" >
                    Check out my Github
                </a>
            </div>
        );
    }
}

export default Portfolio;
