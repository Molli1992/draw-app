import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../src/components/inicio/inicio";
import Draw from "./components/draw/draw";



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/draw" element={<Draw />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
