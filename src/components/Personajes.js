import Cards from "./Cards";
import Container from '@mui/material/Container';



const Personajes = ({personajes}) =>{
  
    return(
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", mt:4}}>
        <Cards data={personajes} />
      </Container>
    )
}

export default Personajes;