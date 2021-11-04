import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import Booking from '../Booking/Booking';
const booking = [
    {
        id: 1,
        name: "Teeth Aurthodonties",
        time: '08.00 AM - 09.00AM',
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: '09.00 AM - 10.00AM',
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: '10.00 AM - 11.00AM',
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: '11.00 AM - 12.00PM',
        space: 3
    },
    {
        id: 5,
        name: "Teeth Orthodonties",
        time: '12.00 PM - 01.00PM',
        space: 7
    },
    {
        id: 6,
        name: "Cosmetic Debtistry",
        time: '01.00 PM - 02.00PM',
        space: 9
    }
]
const AvailableAppiontment = ({ date }) => {
    return (
        <Container>
            <h2>This is Available Appionment {date.toDateString()} </h2>
            <Grid container spacing={2}>
                {
                    booking.map(book => <Booking
                        keg={book.id}
                        book={book}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppiontment;