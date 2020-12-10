import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">SWEAT Home Page</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/exerciseTypes">Exercise List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/exerciseLogs">Exercise Log</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/newExerciseTypeform">Create New Exercise</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/newExerciseLogform">Log New Exercise</Link>
            </li>
        </ul>
    )
}