import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import SingleTestimonial from './SingleTestimonial/SingleTestimonial';
const testimonials = [
    {
        id: 1,
        name: "Winson Herry",
        desc: "It is a long established fact that by the readable content fo a lot layout. The point of using Lorem a more or less normal distribute to using content here , content",
        location: "California",
        img: people1
    },
    {
        id: 2,
        name: "Mechial Jhonson",
        desc: "It is a long established fact that by the readable content fo a lot layout. The point of using Lorem a more or less normal distribute to using content here , content",
        location: "California",
        img: people2
    },
    {
        id: 3,
        name: "Ema Watson",
        desc: "It is a long established fact that by the readable content fo a lot layout. The point of using Lorem a more or less normal distribute to using content here , content",
        location: "California",
        img: people3
    }
]

const Testimonial = () => {
    return (
        <Container sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ mt: 3, color: 'cyan' }} gutterBottom component="div">
                TESTIMONIAL
            </Typography>
            <Typography variant="h3" gutterBottom component="div">
                What's Our Patients Says
            </Typography>
            <Grid container spacing={2} sx={{ m: 3 }}>
                {
                    testimonials.map(ts => <SingleTestimonial
                        key={ts.id}
                        ts={ts}
                    ></SingleTestimonial>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonial;