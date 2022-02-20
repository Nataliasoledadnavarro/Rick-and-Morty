import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



const Ubicacion = () => {
    const [ubicaciones, setUbicaciones] = useState([]);


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
            .then((res) => res.json())
            .then((data) => {
                setUbicaciones(data.results);
            });
    }, []);

    return (
        ubicaciones.map(ubicacion => (
            <Container key={ubicacion.id} sx={{ display: "flex", justifyContent: "center", mt:3}}>
                <Card sx={{width: 350 }}>
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
                        image={"https://www.eltemplodelguerrero.com/blog/wp-content/uploads/2018/06/5-mejores-episodios-Rick-y-Morty-El-Templo-del-Guerrero-destacada.jpg"}
                        alt={ubicacion.name}
                    />
                </Card>
            </Container>
        ))
    )
}

export default Ubicacion;