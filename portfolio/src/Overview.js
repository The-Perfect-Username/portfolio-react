import React, { Component } from 'react';
import SectionTag from './SectionTag';
import './App.css';

class Overview extends Component {
    render() {
        return (
            <div>
                <section id='overview'>
                    <SectionTag title="Overview" />
                    <div class="content">
                        <p>
                            I'm a full-stack web developer from Brisbane, Australia. I enjoy creating dynamic web applications and solving complex problems
                            for your needs.
                        </p>
                        <p>
                            I started building websites when I started my final year in High School, building basic HTML & CSS sites. Most of my skills
                            in programming were self-taught, as there was a time where I couldn't learn more about web development and proper programming
                            principles from someone until my second semester of University at the Queensland University of Technology. Thanks to this, I've honed my problem solving skills to solve
                            your problems. The knowledge and experience I've gained from QUT is just a bonus.
                        </p>
                        <p>
                            As a full-stack dev, I'm fully capable in working both front-end and back-end to create the best web application you ask for.
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Overview;
