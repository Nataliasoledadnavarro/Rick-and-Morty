import { useState, useEffect } from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Form from "./Form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidadPaginas, setCantidadPaginas] = useState(0);

  const handleProximaPagina = () => {
    setPaginaActual(paginaActual + 1)
  };

  const handlePaginaAnterior = () => {
    setPaginaActual(paginaActual - 1)
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://rickandmortyapi.com/api/character/?page=${paginaActual}&name=${busqueda}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setCantidadPaginas(data.pages)
        setLoading(false);
      });
  }, [busqueda, paginaActual]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
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
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="secondary"
          {paginaActual === cantidadPaginas && "disabled"}
          onClick={handleProximaPagina}
        >
          Próxima página
        </Button>
        <Button
        {paginaActual === 1 && "disabled"}
          variant="contained"
          color="secondary"
          onClick={handlePaginaAnterior}
        >
          Página anterior
        </Button>
      </Stack>
    </Container>
  );
};

export default Personajes;
