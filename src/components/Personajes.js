import { useState, useEffect } from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Form from "./Form";
import Box from "@mui/material/Box";
import Paginado from "./Paginado";
import ModalError from "./ModalError"

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidadPaginas, setCantidadPaginas] = useState(0);
  const [abrirModal, setAbrirModal] = useState(false)

  const handleProximaPagina = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handlePaginaAnterior = () => {
    setPaginaActual(paginaActual - 1)
  };

  const handleUltimaPagina = () => {
    setPaginaActual(cantidadPaginas)
  };

  const handlePrimeraPagina = () =>{
    setPaginaActual(1)
  }

  const handleCerrarModal = () =>{
    setAbrirModal(false)
  }
  useEffect(() => {
    setLoading(true);

    fetch(
      `https://rickandmortyapi.com/api/character/?page=${paginaActual}&name=${busqueda}`
    )
      .then((res) => res.json())  
      .then((data) => {
        setPersonajes(data.results || []);
        setCantidadPaginas(data.info.pages);
        setLoading(false);
        
      })
      .catch(() => {setAbrirModal(true)}) 
      
  }, [busqueda, paginaActual,cantidadPaginas, abrirModal]);


  const handleChange = (e) => {
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
      <Paginado
        proximaPagina={handleProximaPagina}
        paginaAnterior={handlePaginaAnterior}
        ultimaPagina = {handleUltimaPagina}
        primeraPagina = {handlePrimeraPagina}
        paginaActual={paginaActual}
        cantidadPaginas={cantidadPaginas}
      />
      {abrirModal && <ModalError abrirModal={abrirModal} cerrarModal={handleCerrarModal}/>}
    </Container>
  );
};

export default Personajes;
