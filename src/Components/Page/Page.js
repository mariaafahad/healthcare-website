import React from 'react';

import About from '../About/About';

import Navbar from '../Home/Navbar';
import Payment from '../Payment/Payment';
import Doctor from '../../Doctor/Doctor';
import Speacilities from '../../Specialities/Speacilities';
import Tables from '../Tables/Tables';
import Footer from '../Footer/Footer';


const Page = () => {
    return (
        <div>

            <Navbar />
            <section className="w-full h-3/4 background">
                <div className="container w-full h-screen p-8 sm:px-0  flex flex-col justify-center text-right">
                    <h1 className="text-6xl text-blue-900 font-bold animate-pulse">Healt Care Hospital</h1>
                    <h2 className="text-gray-100 mt-4">Remember, the only way you can fail is if you give up. <br /> Every time you fail, you come one step closer to success.</h2>
                </div>
            </section>
            <div>
                <h1 className="text-5xl text-center text-blue-900 font-semibold underline my-20  animate-pulse">About us</h1>
            </div>
            <About />

            <div>
                <h1 className="text-5xl text-center font-semibold underline my-20 text-green-800 animate-pulse">Our Specialities</h1>
            </div>
            <Speacilities />

            <div>
                <h1 className="text-5xl text-center font-semibold underline my-20 text-purple-800 animate-pulse">Our Founders</h1>
            </div>
            <Tables />
            <div>
                <h1 className="text-5xl text-center font-semibold underline my-20 text-green-800 animate-pulse">Our Payment Information</h1>
            </div>
            <Payment></Payment>
            <Footer />
        </div>
    );
};

export default Page;