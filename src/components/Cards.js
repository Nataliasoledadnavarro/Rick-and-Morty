import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Cards = ({ data }) => {
    
        return (
           data.map(personaje => 
                <Card sx={{ width: 250, height: 320, mt:3 }} >
                    <CardMedia
                        component="img"
                        height="160"
                        image={personaje.image}
                        alt={personaje.name}
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
            )
        )
    

}

export default Cards;