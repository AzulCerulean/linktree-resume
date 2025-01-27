import React from "react";
import {Link} from "react-router";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projectsContainer">
            <h1>Projects</h1>
            <p>Project Display, more to come :3</p>
            <div className="dodgeTheCreepsContainer">
                <h2>Dodge The Creeps</h2>
                <p>Project in Godot, from their tutorial</p>
                <a href="../../public/Projects/DodgeTheCreeps/index.html">Open Game</a>
            </div>
            <Link to={"/"}>Back to the homepage o_o</Link>
        </div>
    )
}

export default Projects;