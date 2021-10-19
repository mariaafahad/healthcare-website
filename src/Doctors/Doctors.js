import React from 'react';

const Doctors = ({ bio }) => {
    const { name, specialties, description, img, age } = bio;
    console.log(bio);
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">

                    <img className="rounded-t-lg" src={img} alt="" />

                    <div className="p-5">
                        <h2>{name}</h2>

                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{specialties}</h5>

                        <p className="font-normal text-gray-700 mb-3">{description}</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctors;