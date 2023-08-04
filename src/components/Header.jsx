import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Home</Link>

            </li>
            <li className="nav-item">
                <Link to="/red">Red</Link>

            </li>
            <li className="nav-item">
                <Link to="/blue">Blue</Link>

            </li>

        </ul>

    );
}