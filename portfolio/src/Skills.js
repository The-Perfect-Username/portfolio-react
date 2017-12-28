import React, { Component } from 'react';
import './App.css';

class Skills extends Component {
    render() {
        return (
            <div>
                <section id='skills'>
                    <div class="content-head">
                        <div class="title-tag">
                            <p>Skills</p>
                            <span class="tag-pointer"></span>
                        </div>
                    </div>
                    <br />
                    <div class="content">
                        <div id='skillsTable'>
                            <div class="skill-block">
                                <h4>Front-End</h4>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>React</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>
                            <div class="skill-block">
                                <h4>Back-End</h4>
                                <ul>
                                    <li>PHP</li>
                                    <li>Node</li>
                                    <li>Python</li>
                                    <li>Ruby</li>
                                    <li>SQL</li>
                                    <li>OOP</li>
                                    <li>MVC</li>
                                </ul>
                            </div>
                            <div class="skill-block">
                                <h4>More</h4>
                                <ul>
                                    <li>Git</li>
                                    <li>Version Control</li>
                                    <li>Dev Ops</li>
                                    <li>AWS</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;
