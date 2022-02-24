
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState} from "react";

const ModalError = ({abrirModal, cerrarModal}) =>{
    console.log(cerrarModal)
    console.log(abrirModal)
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Personaje no encontrado.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Intentalo de nuevo!
          </Typography>
        </Box>
      </Modal>
    )
}

export default ModalError;