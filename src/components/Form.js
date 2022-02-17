import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const Form = ({handleClick, handleChange, loading}) =>{

return(
<Box
        component="form"
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "center"}}>
        <TextField id="standard-basic" label="Buscar personaje" variant="standard" margin="normal" sx={{ width: 400 }} onChange={handleChange} />
        <Stack   sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained"  >{loading ? "Buscando" : "Buscar"}</Button>
        </Stack>
      </Box>
)
}


export default Form;