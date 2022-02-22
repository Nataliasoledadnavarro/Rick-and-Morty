import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Paginado = ({proximaPagina, paginaAnterior, paginaActual, cantidadPaginas}) =>{
    return(
<Stack direction="row" justifyContent = "center" sx={{mt:5}} spacing={2}>
      <Button
          variant="contained"
          color="secondary"
          onClick={paginaAnterior}
        >
          Página anterior
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={proximaPagina}
        >
          Próxima página
        </Button>
      </Stack>
    )
}

export default Paginado;