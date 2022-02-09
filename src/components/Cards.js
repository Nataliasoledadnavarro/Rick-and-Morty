import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Cards = ({ data }) => {
    const cards = data.map((personaje) => {
        return (
            <Box sx={{ width: 300, ml: 6, mt: 6 }}>
                <Card>
                    <CardMedia
                        component="img"
                        height="180"
                        image={personaje.image}
                        alt="Caricatura del personaje"
                    />
                    <CardContent>
                        <Typography variant="h5">
                            {personaje.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {personaje.species}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {personaje.created}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>)
    })
    console.log(cards)
    return (
        cards
    )

}

export default Cards;