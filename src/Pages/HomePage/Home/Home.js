import React from 'react';
import Navigation from '../../SharedPage/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBannar/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DantalCare from '../DantalCare/DantalCare';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DantalCare></DantalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;