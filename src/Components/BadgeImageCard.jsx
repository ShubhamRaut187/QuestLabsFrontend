import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
function BadgeImageCard({Image,open,setOpen}) {
   console.log(open);
    const handleOpen = () => setOpen(true);
   const handleClose = () => {
    window.location.reload()
    // setOpen(false)
    // console.log(open);
   };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, // Adjust the width here
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      const smallImgStyle = {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 2,
    }
    return (
        <div className='badge_image_card' onClick={handleOpen}>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Button onClick={handleClose} style={{ 'position': 'absolute', 'top': 0, 'right': 0 }}>
                Close
            </Button>
            <img src={Image} alt="Small Img" style={smallImgStyle} />
                <Typography variant="body1" component="p">
                    Text in a modal. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
        </Box>
        </Modal>
            <img src={Image} alt="Badge" />
        </div>
    );
}

export default BadgeImageCard;