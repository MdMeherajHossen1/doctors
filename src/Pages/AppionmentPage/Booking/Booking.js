import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ book, date }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleBookingModal = () => setOpenModal(true);
    const handleBookingClose = () => setOpenModal(false);
    const { name, space, time } = book;
    return (

        <>
            <Grid item xs={12} sm={6} md={4} sx={{ mb: 2 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ color: 'info.main' }} gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="p" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACE AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingModal} variant="contained">Book Appiontment</Button>
                </Paper>
            </Grid>

            <BookingModal
                handleBookingClose={handleBookingClose}
                openModal={openModal}
                book={book}
                date={date}
            ></BookingModal>
        </>

    );
};

export default Booking;