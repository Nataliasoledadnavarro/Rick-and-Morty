import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return data.map((personaje) => (
    <Link to={`/personajes/${personaje.id}`}>
      <Card sx={{ width: 250, height: 280, mt: 3 }} key={personaje.id}>
        <CardMedia
          component="img"
          height="180"
          image={personaje.image}
          alt={personaje.name}
        />
        <CardContent>
          <Typography variant="h5">{personaje.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {personaje.species}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  ));
};

export default Cards;
