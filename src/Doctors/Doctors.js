import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavShared from '../Components/Shared/NavShared';

const Doctors = ({ biography }) => {
    // const { name, specialties, description, img, age } = biography;
    console.log(biography);
    return (
        <div>
            {/* <NavShared /> */}
            <div className="max-w-lg mx-auto ">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">

                    <img className="rounded-t-lg" src={biography.img} alt="" />

                    <div className="p-5">
                        <h2>{biography.name}</h2>

                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{biography.specialties}</h5>

                        <p className="font-normal text-gray-700 mb-3">{biography.description}</p>

                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Doctors;