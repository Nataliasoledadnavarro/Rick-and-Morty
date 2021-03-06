import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paginado from "./Paginado";
import Box from "@mui/material/Box";

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidadPaginas, setCantidadPaginas] = useState(0);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${paginaActual}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
        setCantidadPaginas(data.info.pages);
      });
  }, [paginaActual]);

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

  const cardsEpisodios = episodios.map((episodio) => (
    <Card
      sx={{ display: "flex", width: 350, height: 200, m: 3 }}
      key={episodio.id}
    >
      <CardContent>
        <Typography component="h5" variant="h5">
          {episodio.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          Episode: {episodio.episode}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          Fecha de emisión: {episodio.air_date}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={"https://i.blogs.es/b6d70c/rick-y-morty/450_1000.jpeg"}
        alt={episodio.name}
      />
    </Card>
  ));

  return (
    <Box>
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 3,
      }}
    >
      {cardsEpisodios}
      </Container>
      <Paginado
        proximaPagina={handleProximaPagina}
        paginaAnterior={handlePaginaAnterior}
        ultimaPagina = {handleUltimaPagina}
        primeraPagina = {handlePrimeraPagina}
        paginaActual={paginaActual}
        cantidadPaginas={cantidadPaginas}
      />
      </Box>
   
  );
};

export default Episodios;
