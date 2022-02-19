import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./components/Personajes";
import Episodios from "./components/Episodios";
import Ubicaciones from "./components/Ubicaciones";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DetallePersonaje from "./components/DetallePersonaje";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Personajes />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/:idPersonaje" element={<DetallePersonaje />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
