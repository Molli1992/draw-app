import React, { useState, useEffect, useRef } from "react";
import "./draw.css";
import Navbar from "../navbar/navbar";
import Navigation from "../navigation/navigation";



function Draw() {

    // ----------------------------------- Canvas -------------------------------------------------------

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [state, setState] = useState("false");

    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = 1600;
        canvas.height = 1000;

        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;


    }, []);

    const startDrawing = ({ nativeEvent }) => {

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);

    };

    const finishDrawing = () => {

        contextRef.current.closePath();
        setIsDrawing(false);

    };

    const draw = ({ nativeEvent }) => {

        if (!isDrawing) {
            return
        }

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

    };

    const onChangeSizePincel = (e) => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        console.log(e.target.value)

        if (e.target.value === "5") {
            context.lineWidth = 5;
        }

        if (e.target.value === "7") {
            context.lineWidth = 7;
        }

        if (e.target.value === "9") {
            context.lineWidth = 9;
        }

        if (e.target.value === "11") {
            context.lineWidth = 11;
        }

        if (e.target.value === "13") {
            context.lineWidth = 13;
        }

        if (e.target.value === "15") {
            context.lineWidth = 15;
        }

        if (e.target.value === "17") {
            context.lineWidth = 17;
        }

        if (e.target.value === "19") {
            context.lineWidth = 19;
        }

        if (e.target.value === "21") {
            context.lineWidth = 21;
        }

        if (e.target.value === "23") {
            context.lineWidth = 23;
        }

        if (e.target.value === "25") {
            context.lineWidth = 25;
        }

    };

    const colorwhite = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "white";

    };

    const colorred = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "red";

    };

    const colorgreen = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "green";

    };

    const colorgray = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "gray";

    };

    const coloryellow = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "yellow";

    };

    const colorviolet = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "violet";

    };

    const colorpurple = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "purple";

    };

    const colormaroon = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "maroon";

    };

    const colorfuchsia = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "fuchsia";

    };

    const colorteal = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "teal";

    };

    const colorblack = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "black";

    };

    const colorlime = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "	lime";

    };

    const colorolive = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "olive";

    };

    const colornavy = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "navy";

    };

    const coloraqua = () => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.strokeStyle = "aqua";

    };

    const onClickImagen = (e) => {

        if (e.target.value === "Quitar Imagen") {
            setState("false")
        }

        if (e.target.value === "Caballo") {
            setState("Caballo")
        }

        if (e.target.value === "Elefante") {
            setState("Elefante")
        }

        if (e.target.value === "Familia") {
            setState("Familia")
        }

        if (e.target.value === "Dragon Ball") {
            setState("Dragon Ball")
        }

        if (e.target.value === "Barbie") {
            setState("Barbie")
        }

        if (e.target.value === "Casa") {
            setState("Casa")
        }

        if (e.target.value === "Paisajes") {
            setState("Paisajes")
        }

    };


    return (

        <div className="body-draw">

            <Navbar />
            <Navigation />

            <div className="body-canvas">

                <div className="herramientas-container">

                    <div className="color-container">

                        <button className="color-tshirt-white" style={{ background: "white" }} onClick={colorwhite}></button>
                        <button className="color-tshirt" style={{ background: "red" }} onClick={colorred}></button>
                        <button className="color-tshirt" style={{ background: "green" }} onClick={colorgreen}></button>
                        <button className="color-tshirt" style={{ background: "gray" }} onClick={colorgray}></button>
                        <button className="color-tshirt" style={{ background: "yellow" }} onClick={coloryellow}></button>
                        <button className="color-tshirt" style={{ background: "violet" }} onClick={colorviolet}></button>
                        <button className="color-tshirt" style={{ background: "purple" }} onClick={colorpurple}></button>
                        <button className="color-tshirt" style={{ background: "maroon" }} onClick={colormaroon}></button>
                        <button className="color-tshirt" style={{ background: "fuchsia" }} onClick={colorfuchsia}></button>
                        <button className="color-tshirt" style={{ background: "teal" }} onClick={colorteal}></button>
                        <button className="color-tshirt" style={{ background: "	lime" }} onClick={colorlime}></button>
                        <button className="color-tshirt" style={{ background: "olive" }} onClick={colorolive}></button>
                        <button className="color-tshirt" style={{ background: "navy" }} onClick={colornavy}></button>
                        <button className="color-tshirt" style={{ background: "aqua" }} onClick={coloraqua}></button>
                        <button className="color-tshirt" style={{ background: "black" }} onClick={colorblack}></button>

                    </div>

                    <select className="form-select" onChange={(e) => onChangeSizePincel(e)}>
                        <option>Tamaño del pincel</option>
                        <option>5</option>
                        <option>7</option>
                        <option>9</option>
                        <option>11</option>
                        <option>13</option>
                        <option>15</option>
                        <option>17</option>
                        <option>19</option>
                        <option>21</option>
                        <option>23</option>
                        <option>25</option>
                    </select>

                    <select className="form-select" onChange={(e) => onClickImagen(e)}>
                        <option>Imagen de fondo</option>
                        <option>Quitar Imagen</option>
                        <option>Caballo</option>
                        <option>Elefante</option>
                        <option>Familia</option>
                        <option>Dragon Ball</option>
                        <option>Barbie</option>
                        <option>Casa</option>
                        <option>Paisajes</option>
                    </select>

                </div>

                {state === "false" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}


                {state === "Caballo" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-1"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Elefante" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-2"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Familia" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-3"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Dragon Ball" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-4"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Barbie" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-5"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Casa" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-6"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

                {state === "Paisajes" ?
                    <div className="canvas-container">
                        <canvas
                            className="canvas-draw-7"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            ref={canvasRef}
                        ></canvas>
                    </div>
                    :
                    null}

            </div>

        </div>

    );

};

export default Draw;