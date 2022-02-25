
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ModalError = ({abrirModal, cerrarModal}) =>{
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 320,
        bgcolor:'primary.main', 
        color: 'primary.contrastText',
        border: 'none',
        boxShadow: 24,
        p: 4,
      };
    return(
      <Modal
        open={abrirModal}
        onClose={cerrarModal}
        aria-labelledby="modal-personaje-no-encontrado"
      >
        <Box sx={style}>
          <Typography variant="h6" component="p">
            Personaje no encontrado.
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            Intentalo de nuevo!
          </Typography>
        </Box>
      </Modal>
    )
}

export default ModalError;