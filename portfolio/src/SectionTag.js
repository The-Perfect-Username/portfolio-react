import React, { Component } from 'react';
import './App.css';

class SectionTag extends Component {
    render() {
        return (
            <div>
                <div class="content-head">
                    <div class="title-tag">
                        <p>{this.props.title}</p>
                        <span class="tag-pointer"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionTag;
