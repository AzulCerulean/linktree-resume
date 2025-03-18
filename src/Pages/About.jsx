import React from "react";
import {Link} from "react-router";
import "./About.css";

const softSkills = ["Problem Solving","Teamwork","Communication","Adaptability","Time Management","Creativity","Empathy"];
const hardSkills = ["MongoDB","Express","React","Node.js","JavaScript","HTML","CSS","PowerShell","API","Git","GitHub","GitHubPages","Netlify",
"GoDaddy","ServiceNow","Atlassian","Microsoft Office Suite","Google Workspace","Windows","Linux","macOS","Slack","Technical Writing",
"WebStorm","Visual Studio","Visual Studio Code","Insomnia","Logic Pro X"];

const About = () => {
    return (
        <div className="aboutContainer">
            <h1>Hello there. I'm Azul :3</h1>
            <p className="aboutMeP">MERN stack web developer with a passion for creating dynamic applications
                . Interested in game design and music production
                . A versatile jack-of-all-trades, always exploring new skills.</p>
            <div className="skills">
                <div className="softSkills">
                    <h2>Soft Skills</h2>
                    {/*<ul>
                        {softSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>*/}
                    <span>{softSkills.map(String).join(', ')}</span>
            </div>
                <div className="hardSkills">
                    <h2>Hard Skills</h2>
                    {/*<ul>
                        {hardSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>*/}
                    <span>{hardSkills.map(String).join(', ')}</span>
                </div>
            </div>
            <Link to={"/"}>Back to the homepage o_o</Link>
        </div>
    )
}

export default About;