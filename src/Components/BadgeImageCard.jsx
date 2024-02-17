import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {styled} from '@mui/material/styles'

function BadgeImageCard({Image,open,setOpen}) {
//    console.log(open);
    const handleOpen = () => setOpen(true);
   const handleClose = () => {
    setOpen(false)
};
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, 
        height:150,
        bgcolor: 'background.paper',
        boxShadow: 'none',
        borderRadius: '8px',
        p: 4,
        
      };
    return (
        <>
        <div className='badge_image_card' onClick={handleOpen}>
        
            <img src={Image} alt="Badge" />
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{invisible: true}}
        >
        <Box sx={style}>
            <Button onClick={handleClose} style={{ 'position': 'absolute', 'top': 0, 'right': 0 }}>
                Close
            </Button>
            <img src={Image} alt="Small Img" style={{ width: '20%', maxWidth: 200, display: 'block', margin: '0 auto', borderRadius: 8 }} />
                <Typography variant="body1" component="p" style={{textAlign:'center',fontSize:'20px',fontWeight:'700'}}>
                    Badge Unclocked!⭐
                 </Typography>
                <Typography variant="body1" component="p" style={{textAlign:'center',color:'gray'}}>
                🎉Level up! Earned a shiny new badge!🏅⭐
                </Typography>
        </Box>
        </Modal>
        </>
    );
}

export default BadgeImageCard;