import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paginado from "./Paginado";

const Ubicacion = () => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidadPaginas, setCantidadPaginas] = useState(0);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${paginaActual}`)
      .then((res) => res.json())
      .then((data) => {
        setUbicaciones(data.results);
        setCantidadPaginas(data.info.pages);
      });
  }, [paginaActual]);

  const handleProximaPagina = () => {
    setPaginaActual(paginaActual + 1);
  };

  const handlePaginaAnterior = () => {
    setPaginaActual(paginaActual - 1);
  };

  const cards = ubicaciones.map((ubicacion) => (
    <Card sx={{ width: 280, m: 3 }} key={ubicacion.id}>
      <CardContent>
        <Typography component="h5" variant="h5">
          {ubicacion.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          {ubicacion.dimension}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="p">
          Tipo: {ubicacion.type}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image={
          "https://www.eltemplodelguerrero.com/blog/wp-content/uploads/2018/06/5-mejores-episodios-Rick-y-Morty-El-Templo-del-Guerrero-destacada.jpg"
        }
        alt={ubicacion.name}
      />
    </Card>
  ));

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 3,
      }}
    >
      {cards}
      <Paginado
        proximaPagina={handleProximaPagina}
        paginaAnterior={handlePaginaAnterior}
        paginaActual={paginaActual}
        cantidadPaginas={cantidadPaginas}
      />
    </Container>
  );
};

export default Ubicacion;
