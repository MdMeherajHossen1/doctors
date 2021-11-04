import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import dental from '../../../images/treatment.png'
const DantalCare = () => {
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={5}>
                    <img src={dental} style={{ width: '400px' }} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={5} >
                    <Box style={{ textAlign: 'left', padding: '25px 0px' }}>
                        <Typography variant="h3" sx={{ my: 3 }} gutterBottom component="div">
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            It is a long established fact that a reader will be distracted by the readable contentr of a page . Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore illo error quos in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores at autem nostrum eligendi ut eaque magnam obcaecati commodi voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, exercitationem!
                        </Typography>
                        <Button variant="contained" sx={{ mt: 3 }} >Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DantalCare;