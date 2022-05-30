import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="bg-secondary">
            <ul className="nav d-flex justify-content-around">
                <li className="nav-item">
                    <Link to='/' className="h4 text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/posts' className="h4 text-white">Criar Post</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;