import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    BorderRadius: '21px',
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 5,
};

const BookingModal = ({ openModal, handleBookingClose, book, date }) => {
    const handleSubmit = () => {
        alert('submitted')
        handleBookingClose()
    }
    const { name, time } = book
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleBookingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <TextField id="outlined-basic" disabled sx={{ width: "100%", m: 1 }} defaultValue={time} variant="outlined" />
                    <TextField id="outlined-basic" sx={{ width: "100%", m: 1 }} defaultValue="Your name" variant="outlined" />
                    <TextField id="outlined-basic" sx={{ width: "100%", m: 1 }} defaultValue="Your Email" variant="outlined" />
                    <TextField id="outlined-basic" sx={{ width: "100%", m: 1 }} defaultValue="Mobile Number" variant="outlined" />
                    <TextField id="outlined-basic" sx={{ width: "100%", m: 1 }} defaultValue={date.toDateString()} variant="outlined" />
                    <Button variant='contained' type="submit" onClick={handleSubmit} sx={{ width: '100%', mb: 3 }}>Submit</Button>
                </Box>
            </Modal>

        </div>
    );
};

export default BookingModal;