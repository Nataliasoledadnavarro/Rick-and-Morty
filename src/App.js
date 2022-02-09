import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



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
      <Box
        component="form"
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "center"}}>
        <TextField id="standard-basic" label="Buscar personaje" variant="standard" margin="normal" sx={{ width: 400 }} onChange={handleChange} />
        <Stack   sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained"  >{loading ? "Buscando" : "Buscar"}</Button>
        </Stack>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Cards data={personajes} />
      </Box>
    </Box>
  )
}

export default App;
