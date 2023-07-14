import React from "react";
import "./inicio.css";
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

function Inicio() {


    return (

        <div className="banner">

            <Navigation />

            <Navbar />

            <div className="content-inicio">

                <h1>Una pintura es un poema sin palabras</h1>
                <p>
                    Aprende a dibujar online con nuestro distio web
                </p>

                <div>
                    <Link to="/draw">
                        <button type="button" className="button-inicio">
                            <span className="span-button"></span>Comienza tu dibujo
                        </button>
                    </Link>
                </div>

            </div>

        </div>

    );

};

export default Inicio;