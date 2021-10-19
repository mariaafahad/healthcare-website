import React from 'react';

import About from '../About/About';

import Navbar from '../Home/Navbar';
import Payment from '../Payment/Payment';
import Doctor from '../../Doctor/Doctor';
import Speacilities from '../../Specialities/Speacilities';


const Page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <About />
            <Payment></Payment>
            <div>
                <h1 className="text-5xl text-center font-semibold underline m-20 text-green-800">Our Services</h1>
            </div>
            <Speacilities />

            <Doctor />
        </div>
    );
};

export default Page;