import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Personajes from "./components/Personajes";
import Episodios from "./components/Episodios";
import Ubicaciones from "./components/Ubicaciones";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, [busqueda]);

  const handleChange = (e) => {
    {
      valorDelInput === "" && setBusqueda("");
    }
    setValorDelInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <BrowserRouter>
      <Nav />
      <Form
        handleChange={handleChange}
        handleClick={handleClick}
        loading={loading}
      />
      <Routes>
          <Route path="/" element={<Personajes />}/>
          <Route path="/episodios" element={<Episodios />} />
          <Route path="/ubicaciones" element={<Ubicaciones />}/>
      </Routes>
      <Personajes personajes={personajes} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
