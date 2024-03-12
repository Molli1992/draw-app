import React from "react";
import ChessLogo from "../../imagenes/pincel-logo-removebg-preview.png";
import { Link } from "react-router-dom";


function Navbar() {


    return (

        <div className="navbar">

            <img src={ChessLogo} alt="logo" className="logo" />

            <ul className="ul-navbar">
                <li><Link to="/" className="link-nav">Inicio</Link></li>
                <li><Link to="/learn" className="link-nav">Aprender</Link></li>
            </ul>

        </div>

    );

};

export default Navbar;