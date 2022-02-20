import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const DetallePersonaje = () => {
  const params = useParams();
  const [personaje, setPersonaje] = useState([]);

  console.log(params.idPersonaje);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
      .then((res) => res.json())
      .then((data) => setPersonaje(data));
  }, []);

  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: 12 }}>
      <Card sx={{ display: "flex", width: 500 }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={personaje.image}
          alt={personaje.name}
        />
        <CardContent>
          <Typography component="h5" variant="h5">
            {personaje.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Estado: {personaje.status}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Especie: {personaje.species}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Género: {personaje.gender}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetallePersonaje;
