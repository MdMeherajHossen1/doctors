import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SingleTestimonial = ({ ts }) => {
    const { name, img, desc, location } = ts
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="p" gutterBottom component="div">
                    {desc}
                </Typography>
                <Grid container spacing="2" sx={{ mt: 3 }}>
                    <Grid md={3}>
                        <img src={img} style={{ width: '50px' }} alt="" />
                    </Grid>
                    <Grid md={9}>
                        <Typography variant="h6" sx={{ color: 'cyan' }} component="div">
                            {name}
                        </Typography>
                        <Typography variant="p" component="div">
                            {location}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SingleTestimonial;