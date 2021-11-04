import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import { Container } from '@mui/material';
const services = [
    {
        name: "Fluoride Treatment",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime repudiandae possimus optio? Unde nobis dolor ipsam qui necessitatibus, minima id eveniet ab enim quisquam magni numquam nihil iste. Non.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime repudiandae possimus optio? Unde nobis dolor ipsam qui necessitatibus, minima id eveniet ab enim quisquam magni numquam nihil iste. Non.",
        img: cavity
    },
    {
        name: "Teath Whitening",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime repudiandae possimus optio? Unde nobis dolor ipsam qui necessitatibus, minima id eveniet ab enim quisquam magni numquam nihil iste. Non.",
        img: whitening
    }
]

const Services = () => {
    return (

        <Box sx={{ flexGrow: 1, m: 3 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 5 }} variant="h3" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default Services;