import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Calender from '../../SharedPage/Chalender/Calender'
const AppiontmentHeader = ({ date, setDate }) => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppiontmentHeader;