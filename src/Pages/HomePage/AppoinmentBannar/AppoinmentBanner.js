import React from 'react';
import Button from '@mui/material/Button';
import bannerImage from '../../../images/appointment-bg.png'
import doctorImage from '../../../images/doctor.png'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const bannerbg = {
    background: `url(${bannerImage})`,
    posititon: 'center',
    backgroundColor: 'rgba(10, 28, 53 ,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '100px   '

}
const AppoinmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerbg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img src={doctorImage} style={{ width: "400px", marginTop: "-120px" }} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start' }} >
                    <Box sx={{ textAlign: 'left', pt: 3 }} >
                        <Typography sx={{ fontWeight: 500, mt: 3, color: '#2CF9D3' }} variant="h5" component="div">
                            Appointment
                        </Typography>
                        <Typography sx={{ fontWeight: 500, mt: 3, color: 'white' }} variant="h2" component="div">
                            Make an Appoinment Today
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#2CF9D3' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;