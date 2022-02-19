import { useState, useEffect } from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Form from "./Form";
import Box from "@mui/material/Box";

const Personajes = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Cards data={personajes} />
      </Box>
    </Container>
  );
};

export default Personajes;
