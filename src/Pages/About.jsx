import React from "react";
import {Link} from "react-router";
import "./About.css";

const About = () => {
    return (
        <div className="aboutContainer">
            <h1>About me wip :3</h1>
            <div className="name">
                <p className="aboutName">Azul Cerulean (Spitsyn)</p>
                <p className="aboutTitles">Web Developer, IT Helpdesk Specialist, Technical Support, ServiceNow
                    Administrator, Troubleshooting Expert</p>
            </div>
            <div className="achievements">
                <h2 className="aboutAchievements">Achievements</h2>
                <h3>Led Office Infrastructure Projects</h3>
                <p>Redesigned Conference systems and phone system</p>
                <h3>Led ServiceNow Projects</h3>
                <p>Successfully managed ServiceNow projects impacting over 200 users, promoting easier access to support and Change Management</p>
                <h3>Boosted User Satisfaction</h3>
                <p>Improved user satisfaction by 25% via self-help documentation and IT training. Created, surveys for internal IT for tracking.</p>
                <h3>Streamlined Operations</h3>
                <p>Automated repetitive tasks using PowerShell, saving ~40 hours monthly.</p>
            </div>
            <div className="toolbox">
            <h2 className="aboutToolbox">Toolbox</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>API</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>GitHub Pages</li>
                    <li>Netlify</li>
                    <li>GoDaddy</li>
                    <li>ServiceNow</li>
                    <li>PowerShell</li>
                    <li>Atlassian (online and server)</li>
                    <li>Microsoft Office Suite</li>
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>OSX</li>
                    <li>Technical Writing</li>
                    <li>Webstorm</li>
                    <li>VSCode</li>
                    <li>Insomnia</li>
                </ul>
            </div>
            <div className="Contact">
                <p className="email">azul.sama@outlook.com</p>
                <p className="phone">+15147814238</p>
                <p className="linkedIn">https://www.linkedin.com/in/azul-cerulean</p>
                <p className="location">Montreal</p>
            </div>
            <Link to={"/"}>Back to the homepage o_o</Link>
        </div>
    )
}

export default About;