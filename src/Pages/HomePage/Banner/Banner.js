import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bg from '../../../images/bg.png'
import chair from '../../../images/chair.png'


const bgBanner = {
    background: `url(${bg})`,
    posittion: 'center'

}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bgBanner}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', height: '450px', textAlign: 'left' }}>
                    <Box >
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'justify', fontSize: '16px', my: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid reprehenderit voluptatem vitae nihil deleniti eum ex, sunt nesciunt laudantium.

                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#2CF9D3' }}>GET APPIONTMENT</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', height: '450px' }}>
                    <img src={chair} style={{ width: 'auto', height: '300px' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;
