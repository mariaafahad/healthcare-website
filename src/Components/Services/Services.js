import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';



const Services = () => {
    return (
        <div>
            <Navbar />
            <h1>Hello from service</h1>
            <div className="grid grid-cols-4 ">
                <div>
                    <h1 className="text-center">Sercice 1</h1>
                    <img src=" https://i.ibb.co/JRLYsch/blood-donation-background-1057-981.jpg" alt="" />
                    <p className="text-center">Sercice Charge:$35</p>
                </div>
                <div>
                    <h1 className="text-center">Sercice 1</h1>
                    <img src="https://i.ibb.co/4s7HD3c/mental-health-awareness-concept-23-2148514643.jpg" alt="" />
                    <p className="text-center">Sercice Charge:$35</p>
                </div>
                <div>
                    <h1 className="text-center">Sercice 1</h1>
                    <img src="https://i.ibb.co/5syrh88/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file-1387-942.jpg" alt="" />
                    <p className="text-center">Sercice Charge:$35</p>
                </div>
                <div>
                    <h1 className="text-center">Sercice 1</h1>
                    <img src="https://i.ibb.co/6JNR5WR/side-british-ambulance-53876-63444.jpg" alt="" />
                    <p className="text-center">Sercice Charge:$35</p>
                </div>

            </div>


            <div>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Services;