import Stack from "@mui/material/Stack";
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const Paginado = ({
  proximaPagina,
  paginaAnterior,
  ultimaPagina,
  primeraPagina,
  paginaActual,
  cantidadPaginas,
}) => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ mt: 5 }} spacing={2}>
      
      <IconButton
        color="secondary"
        aria-label="Primera página"
        onClick={primeraPagina}
        disabled={paginaActual === 1}
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      
      <IconButton
        color="secondary"
        aria-label="Página anterior"
        onClick={paginaAnterior}
        disabled={paginaActual === 1}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        color="secondary"
        aria-label="Próxima página"
        onClick={proximaPagina}
        disabled={paginaActual === cantidadPaginas}
      >
        <NavigateNextIcon />
      </IconButton>

      <IconButton
        color="secondary"
        aria-label="Última página"
        onClick={ultimaPagina}
        disabled={paginaActual === cantidadPaginas}
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Stack>
  );
};

export default Paginado;
