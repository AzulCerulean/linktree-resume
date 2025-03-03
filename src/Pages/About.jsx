//import React from "react";
import {Link} from "react-router";
import "./About.css";

const softSkills = ["Problem Solving","Teamwork","Communication","Adaptability","Time Management","Creativity","Empathy"];
const hardSkills = ["MongoDB","Express","React","Node.js","JavaScript","HTML","CSS","PowerShell","API","Git","GitHub","GitHubPages","Netlify",
"GoDaddy","ServiceNow","Atlassian","Microsoft Office Suite","Google Workspace","Windows","Linux","macOS","Slack","Technical Writing",
"WebStorm","Visual Studio","Visual Studio Code","Insomnia","Logic Pro X"];

const About = () => {
    return (
        <div className="aboutContainer">
            <h1>Hello there. I&apos;m Azul :3</h1>
            <p className="aboutMeP">If you are here, then you want to know more about me o_o
                . Well, I&apos;ve been in the IT Support bubble for over 6 years,
                I bring strong skills in troubleshooting, system maintenance, and user support
                . A versatile jack-of-all-trades, always exploring new skills.
                On my personal time, I enjoy playing games, making music, or work on a project
                . I also got some great improvisational cooking skills, but that&apos;s reserved for my inner circles {">"}:3.
            </p>
            <div className="skills">
                <div className="softSkills">
                    <h2>Soft Skills</h2>

                        {softSkills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}

            </div>
                <div className="hardSkills">
                    <h2>Hard Skills</h2>
                    <ul>
                        {hardSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <Link to={"/"}>Back to the homepage o_o</Link>
        </div>
    )
}

export default About;