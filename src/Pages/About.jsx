import React from "react";
import {Link} from "react-router";

const About = () => {
    return (
        <>
            <h1>About me wip :3</h1>
            <div className="name">
                <p className="aboutName">Azul Cerulean (Spitsyn)</p>
                <p className="aboutTitles">Web Developer, IT Helpdesk Specialist, Technical Support, ServiceNow
                    Administrator, Troubleshooting Expert</p>
            </div>
            <div className="achievements">
                <h2 className="aboutAchievements">Achievements</h2>
            </div>
            <div className="toolbox">
                <h2 className="aboutToolbox">Toolbox</h2>

            </div>
            <div className="Contact">
                <p className="email">azul.sama@outlook.com</p>
                <p className="phone">+15147814238</p>
                <p className="linkedIn">https://www.linkedin.com/in/azul-cerulean</p>
                <p className="location">Montreal</p>
            </div>
            <Link to={"/"}>Back to the homepage o_o</Link>
        </>
    )
}

export default About;