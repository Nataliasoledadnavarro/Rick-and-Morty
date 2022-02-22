import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import error from "../error.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Card sx={{ width: "60%", m: "auto", mt: 3, boxShadow: 0 }}>
      <CardMedia
        component="img"
        image={error}
        alt="Error 404. Página no encontrada"
      />
      <Link to="/">
        <CardActions
          sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
        >
          <Button variant="contained" color="success">
            Volver a personajes
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
};

export default Error404;
