import React, { Component } from 'react';
import './App.css';

class PortfolioItem extends Component {
    render() {
        return (
            <div>
                <a class='portfolio-link' href={this.props.url} target='_blank'>
                    <div class="portfolio-item">
                        <div class="portfolio-image">
                            <img src={this.props.image_url} height="100%" width="auto" />
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

export default PortfolioItem;
