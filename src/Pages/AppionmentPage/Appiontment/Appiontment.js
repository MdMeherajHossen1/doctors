import React, { useState } from 'react';
import Navigation from '../../SharedPage/Navigation/Navigation'
import AppiontmentHeader from '../AppiontmentHeader/AppiontmentHeader'
import AvailableAppiontment from '../AvailableAppiontment/AvailableAppiontment'
const Appiontment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <Navigation></Navigation>
            <AppiontmentHeader date={date} setDate={setDate}></AppiontmentHeader>
            <AvailableAppiontment date={date}></AvailableAppiontment>
        </div>
    );
};

export default Appiontment;