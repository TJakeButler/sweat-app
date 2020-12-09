import React from "react"
import { Link } from "react-router-dom"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">SWEAT Home Page</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Exercise List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Exercise Log</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Graphs</Link>
            </li>
        </ul>
    )
}