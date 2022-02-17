import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from "./components/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer";



const App = () => {

  const [personajes, setPersonajes] = useState([])
  const [valorDelInput, setValorDelInput] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results)
        setLoading(false);
      });
  }, [busqueda]);


  const handleChange = (e) => {
    {valorDelInput === "" && setBusqueda("")}
    setValorDelInput(e.target.value);
    
  };

  const handleClick = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };
  
  return (
    <Box>
      <Nav/>
      <Form handleChange={handleChange}
      handleClick={handleClick}
      loading={loading}
      />
      <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", mt:4}}>
        <Cards data={personajes} />
      </Container>
      <Footer/>
    </Box>
  )
}

export default App;
