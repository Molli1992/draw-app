import React from "react";
import "./learn.css"
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";



function Learn() {

    return (

        <div className="body-learn">

            <Navbar />

            <Navigation />

            <div className="container-learn">

                <div className="container-text-learn">
                    <h2>
                        Si quieres ser un artista, lleva un cuaderno de dibujo contigo y
                        dibuja todo lo que veas.
                    </h2>

                    <p>
                        Bienvenido a nuestra sesión de aprendizaje, aprende a dibujar desde tu casa
                    </p>
                </div>

                <div className="container-filtros-videos">


                    <div className="youtube-container">

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/A6cCS8ky9PU"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/ecS2yVPGbl8"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/qKC3zScOxlI"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/-zL5EfYoiF0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/p2_IcXnJtPQ"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/BbV_ZcAfz_g"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/d_NnEmC_Sqo"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/InpIAuR2sM0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                        <div className="video">
                            <iframe
                                src="https://www.youtube.com/embed/GYgGPRY8OWU"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowFullScreen
                                title="video-1"
                            ></iframe>
                        </div>

                    </div>

                </div>

            </div>

        </div >

    );

};

export default Learn;