import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navb from "./Componentes/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home/Home";
import Pokemones from "./views/Pokemones/Pokemones";
import Pokemon from "./views/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
