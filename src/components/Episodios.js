import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



const Episodios = () => {
    const [episodios, setEpisodios] = useState([]);


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((res) => res.json())
            .then((data) => {
                setEpisodios(data.results);
            });
    }, []);

    return (
        episodios.map(episodio => (
            <Container key={episodio.id} sx={{ display: "flex", justifyContent: "center", mt:3}}>
                <Card sx={{ display: "flex", width: 350 }}>
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
                        sx={{ width: 151 }}
                        image={"https://i.blogs.es/b6d70c/rick-y-morty/450_1000.jpeg"}
                        alt={episodio.name}
                    />
                </Card>
            </Container>
        ))
    )
}

export default Episodios;